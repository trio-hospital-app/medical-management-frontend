import PatientInfoHeader from "../../components/patientInfoHeader";
import PatientTabsCard from './components/patientTabsCard'

function PatientId() {
  return (
    <div className="Patients">
      <PatientInfoHeader />
      <PatientTabsCard />
    </div>
  );
}

export default PatientId;
