import React, { ReactNode } from 'react';
import { Button, Modal } from 'flowbite-react';

interface BasicModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  submitTitle: string;
  showCancelButton?:boolean;
  showSubmitButton?:boolean;
}

function BasicModal({ children, setOpenModal, openModal, submitTitle, showCancelButton, showSubmitButton }: BasicModalProps) {
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">{children}</div>
        </Modal.Body>
        <Modal.Footer>
          {showSubmitButton && <Button onClick={() => setOpenModal(false)}>{submitTitle}</Button>}
          { showCancelButton && <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicModal;
