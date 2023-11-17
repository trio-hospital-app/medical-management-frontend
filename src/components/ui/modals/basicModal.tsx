import React, { ReactNode } from 'react';
import { Button, Modal } from 'flowbite-react';

interface BasicModalProps {
  children: ReactNode;
  title: string,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  submitTitle: string;
  showCancelButton?:boolean;
  showSubmitButton?:boolean;
  cancelTitle: string;
}

function BasicModal({ children, title, setOpenModal, openModal, cancelTitle, submitTitle, showCancelButton, showSubmitButton }: BasicModalProps) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>

        <Modal.Body>
          <div className="space-y-6">{children}</div>
        </Modal.Body>

        <Modal.Footer>

          {showSubmitButton && <Button onClick={() => setOpenModal(false)}>{submitTitle}</Button>}

          { showCancelButton && <Button color="gray" onClick={() => setOpenModal(false)}>
            {cancelTitle}
          </Button>}
          
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default BasicModal;
