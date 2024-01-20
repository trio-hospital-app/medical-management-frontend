import DataTable from "react-data-table-component";
import { useGetConsultationofPatient } from "../../../../hooks/reactQuery/useVisit";
import Loader from "../../../../components/ui/loader";
import { formatDate } from "../../../../hooks/formattedDate";

function DoctorsTable({id}) {

  const {
    data: consultationData,
    isLoading: loadingConsults,
} = useGetConsultationofPatient(id);

if(loadingConsults) {
  return <Loader/>
}

const columns = [
  {
    name: "Date",
    selector: (row) => formatDate(row?.createdAt),
    sortable: true,
    // width: "200px",
  },
  {
    name: "Visit ID",
    selector: (row) => row?.id,
    sortable: true,
    // width: "200px",
  },
  {
    name: "Doctor",
    selector: (row) => <div>{row?.doctorId?.firstName} {row?.doctorId?.lastName}</div>,
    sortable: true,
  },
  {
    name: "Patient ID",
    selector: (row) => <div>{row?.patientId?.firstName} {row?.patientId?.lastName}</div>,
    sortable: true,
    // width: "200px",
  },
  {
    name: "Visit Type",
    selector: (row) => row?.visitType[0]?.name,
    sortable: true,
    // width: "200px",
  },
  {
    name: "Status",
    selector: (row) => row?.status,
    sortable: true,
    // width: "200px",
  }
];

  return (
    <div>
      <DataTable
        columns={columns}
        data={consultationData?.data?.consultations}
      />
    </div>
  );
}

export default DoctorsTable;
