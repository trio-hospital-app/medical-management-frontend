import PatientInfoHeader from "../../components/patientInfoHeader";
import Loader from "../../components/ui/loader";
import { useGetPatientById } from "../../hooks/reactQuery/usePatients";
import PatientTabsCard from "./components/patientTabsCard";
import { useParams } from "react-router-dom";

function PatientId() {
  const { id } = useParams();

  const { isLoading, data } = useGetPatientById(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="Patients">
      <PatientInfoHeader patientData={data.data} />
      <PatientTabsCard />
    </div>
  );
}

export default PatientId;
