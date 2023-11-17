import React, { ReactNode } from "react";
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
}: BasicModalProps) {
  return (
    <div className="basicModal">
      <Modal show={openModal} dismissible color-white onClose={() => setOpenModal(false)}>
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
              onClick={() => setOpenModal(false)}
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
