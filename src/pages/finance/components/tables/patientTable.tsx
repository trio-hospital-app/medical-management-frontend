import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
// import { useGetPatients } from "../../../../hooks/reactQuery/usePatients";
// import Loader from "../../../../components/ui/loader";
import { formatDate } from "../../../../hooks/formattedDate";
// import PatientService from "../../../../services/patientService";
// import { QueryClient } from "react-query";

function PatientTable({ patientData }) {
  // const queryClient = new QueryClient();
  const navigate = useNavigate();
  // const { data, isLoading, refetch } = useGetPatients(1);

  // if (isLoading) {
  //   return <Loader />;
  // }

  // const handlePageChange = async (page) => {
  //   console.log(page);
  //   await refetch(page);
  //   await queryClient.prefetchQuery(["patients", page], () =>
  //     PatientService.getPatients(page),
  //   );
  // };

  interface Patient {
    lastAppointment: number;
    phone: string;
    firstName: string;
    lastName: string;
    patientId: string;
    gender: string;
    address: {
      dob: string;
    };

    id: string;
    dateOfBirth: string;
    phoneNumber: string;
    lastAppointmentDate: string;
  }

  const columns = [
    {
      name: "Patient Name",
      selector: (row: Patient) => `${row.firstName} ${row.lastName}`,
      sortable: true,
      width: "350px",
    },
    {
      name: "Patient ID",
      selector: (row: Patient) => row.patientId,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row: Patient) => row.gender,
    },
    // {
    //   name: "Date of Birth",
    //   selector: (row: Patient) => formatDate(row.address?.dob),
    //   sortable: true,
    // },
    {
      name: "Phone Number",
      selector: (row: Patient) => row.phone,
      sortable: true,
    },
    {
      name: "Last Appointment",
      selector: (row: Patient) => formatDate(row.lastAppointment),
      sortable: true,
    },
  ];

  const handleRowClick = (id: string) => {
    navigate(`/finance/${id}`);
  };

  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
      <DataTable
        columns={columns}
        data={
          // patientData?.data ? patientData?.data : data?.data.patients
          patientData?.data 
        }
        onRowClicked={(row) => handleRowClick(row.id)}
        // pagination
        // paginationServer
        // paginationTotalRows={data?.data.totalItems}
        // onChangePage={handlePageChange}
      />
    </div>
  );
}

export default PatientTable;
