import PatientInfoHeader from "../../components/patientInfoHeader";
import BasicModal from "../../components/ui/modals/basicModal";

function PatientId() {

  return (
    <div className="Patients">
      <PatientInfoHeader />
      <BasicModal
        title="New Modal"
        setOpenModal={() => {
          true;
        }}
        cancelTitle='Reject'
        openModal={true}
        showCancelButton={true}
        submitTitle="shdcdhcbdh"
        showSubmitButton={true}
      >
        chisom
      </BasicModal>
    </div>
  );
}

export default PatientId;
