import React, { ReactNode, CSSProperties } from "react";
import { Modal } from "flowbite-react";
import { Button } from "../button";

interface BasicModalProps {
  children: ReactNode;
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  submitTitle?: string;
  showCancelButton?: boolean;
  size?: string;
  isDisable?: boolean;
  showSubmitButton?: boolean;
  cancelTitle?: string;
  style?: CSSProperties;
  submitHandler?: () => void;
}

function BasicModal({
  children,
  title,
  setOpenModal,
  openModal,
  cancelTitle,
  size,
  isDisable,
  submitTitle,
  showCancelButton,
  showSubmitButton,
  style,
  submitHandler,
}: BasicModalProps) {
  const handleDefaultSubmit = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        className="z-[100] backdrop-blur-sm"
        show={openModal}
        size={size}
        dismissible
        color-white
        onClose={() => setOpenModal(false)}
        style={style}
      >
        <Modal.Header>
          <p className="text-ha-primary1">{title}</p>
        </Modal.Header>

        <div className="space-y-6 max-h-[40rem] overflow-y-scroll shadow p-5 border-t-2 border-b-2">
          {children}
        </div>

        <Modal.Footer>
          {showCancelButton && (
            <Button
              className=" text-white  bg-red-500 hover:bg-red-400 w-[auto] "
              onClick={() => setOpenModal(false)}
            >
              {cancelTitle}
            </Button>
          )}

          {showSubmitButton && (
            <Button
              disabled={isDisable ? true : false}
              onClick={() => {
                submitHandler ? submitHandler() : handleDefaultSubmit();
              }}
              className="hover:bg-blue-400 text-white bg-blue-500 w-[auto]"
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
