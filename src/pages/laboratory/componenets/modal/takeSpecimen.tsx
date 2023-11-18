import { useState } from "react";
import PatientInfoHeader from "../../../../components/patientInfoHeader";
import BasicModal from "../../../../components/ui/modals/basicModal";

function TakeSpecimen() {
  const [openModal, setOpenModal] = useState(false);

  const handleclick = () => {
    setOpenModal(true);
  };

  return (
    <div className="Patients">
      <button onClick={handleclick}>open modal</button>
      <PatientInfoHeader />
      <BasicModal
        title="New Modal"
        setOpenModal={setOpenModal}
        cancelTitle="cancel"
        openModal={openModal}
        showCancelButton={true}
        submitTitle="shdcdhcbdh"
        showSubmitButton={true}
      >
        chisom
      </BasicModal>
    </div>
  );
}

export default TakeSpecimen;
