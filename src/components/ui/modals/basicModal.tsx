import React, { ReactNode, CSSProperties } from "react";
import { Modal } from "flowbite-react";
import { Button } from "../button";

interface BasicModalProps {
  children: ReactNode;
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  submitTitle: string;
  showCancelButton?: boolean;
  showSubmitButton?: boolean;
  cancelTitle: string;
  style?: CSSProperties; // Use style as the prop name
  submitHandler?: () => void; // Add submitHandler prop
}

function BasicModal({
  children,
  title,
  setOpenModal,
  openModal,
  cancelTitle,
  submitTitle,
  showCancelButton,
  showSubmitButton,
  style, // Rename the prop to style
  submitHandler, // Add the submitHandler prop
}: BasicModalProps) {
  const handleDefaultSubmit = () => {
    // Default submit handler (can be customized)
    setOpenModal(false);
  };

  return (
    <div className="basicModal">
      <Modal
        show={openModal}
        dismissible
        color-white
        onClose={() => setOpenModal(false)}
        style={style}
      >
        <Modal.Header>
          <p className="text-ha-primary1">{title}</p>
        </Modal.Header>

        <div className="space-y-6 max-h-[40rem] overflow-y-scroll">
          {children}
        </div>

        <Modal.Footer>
          {showCancelButton && (
            <Button
              className=" text-white  bg-red-500 hover:bg-red-400 w-[6rem] "
              onClick={() => setOpenModal(false)}
            >
              {cancelTitle}
            </Button>
          )}

          {showSubmitButton && (
            <Button
              onClick={() => {
                submitHandler ? submitHandler() : handleDefaultSubmit();
              }}
              className="hover:bg-blue-400 text-white bg-blue-500 w-[6rem]"
            >
              {submitTitle}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BasicModal;
