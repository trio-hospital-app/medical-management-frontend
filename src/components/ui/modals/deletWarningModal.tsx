import React, { CSSProperties } from "react";
import { Modal } from "flowbite-react";
import { Button } from "../button";
import { IoWarning } from "react-icons/io5";

interface DeleteWarningModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  confirmTitle?: string;
  showCancelButton?: boolean;
  style?: CSSProperties;
  confirmHandler?: () => void;
}

function DeleteWarningModal({
  setOpenModal,
  openModal,
  confirmTitle,
  showCancelButton,
  style,
  confirmHandler,
}: DeleteWarningModalProps) {
  const handleDefaultConfirm = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        className="z-[100]"
        show={openModal}
        size="sm" // Adjust the size as needed
        dismissible
        color-white
        onClose={() => setOpenModal(false)}
        style={style}
      >
        <Modal.Header>
          <p className="text-red-500">Delete Confirmation</p>
        </Modal.Header>

        <div className="flex flex-col p-5 border items-center justify-center">
          <IoWarning className="text-red-500 text-[50px]" />
          <p>
            Are you sure you want to delete this record? This action cannot be
            undone.
          </p>
        </div>

        <Modal.Footer>
          {showCancelButton && (
            <Button
              className="text-white bg-gray-500 hover:bg-gray-400 w-[auto]"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
          )}

          <Button
            onClick={() => {
              confirmHandler ? confirmHandler() : handleDefaultConfirm();
            }}
            className="hover:bg-red-400 text-white bg-red-500 w-[auto]"
          >
            {confirmTitle || "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteWarningModal;
