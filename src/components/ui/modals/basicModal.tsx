import React, { ReactNode, CSSProperties } from "react";
import { Modal } from "flowbite-react";

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
      <Modal show={openModal} dismissible color-white onClose={() => setOpenModal(false)} style={style}>
        <Modal.Header>{title}</Modal.Header>

        <div className="space-y-6 border">{children}</div>

        <Modal.Footer>
          {showCancelButton && (
            <span
              className="border border-red-500 text-red-500 px-5 py-2 rounded-md bg-red-100 cursor-pointer hover:bg-red-200 "
              onClick={() => setOpenModal(false)}
            >
              {cancelTitle}
            </span>
          )}

          {showSubmitButton && (
            <span
              className="border bg-blue-500 px-5 py-2 rounded-md cursor-pointer hover:bg-blue-400 text-white"
              onClick={() => {
                submitHandler ? submitHandler() : handleDefaultSubmit();
              }}
            >
              {submitTitle}
            </span>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BasicModal;
