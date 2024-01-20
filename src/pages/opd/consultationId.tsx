import PatientInfoHeader from "../../components/patientInfoHeader";
import Loader from "../../components/ui/loader";
import { useGetPatientById } from "../../hooks/reactQuery/usePatients";
import PatientTabsCard from "./components/patientTabsCard";
import { useParams } from "react-router-dom";

function ConsultationId() {
  const { pid } = useParams();
  console.log(pid, 'pid')

  const { isLoading, data } = useGetPatientById(pid);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="Patients">
      <PatientInfoHeader patientData={data.data} />
      <PatientTabsCard id={pid}  patientData={data.data}/>
    </div>
  );
}

export default ConsultationId;
