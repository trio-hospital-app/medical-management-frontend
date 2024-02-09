import { Button } from "flowbite-react";
import DataTable from "react-data-table-component";
import NewTreatment from './newTreatment'
import { toast } from "react-toastify";
import { useAddTreatment, useGetPharmacy, useGetTreatments } from '../../../../hooks/reactQuery/usePharmacy';
import Loader from "../../../../components/ui/loader";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";

function PharmacyTable({ id, cid, patientData }) {
  const { data: medicationOptions, refetch:pharmRefetch, isLoading: loadingPharmacy } = useGetPharmacy();
  const { data: patientPharmarcy, refetch:patientRefetch, isLoading: loadingTreatments } = useGetTreatments();
  const {
    mutate,
    status: addTreatmentStatus,
    isLoading: addTreatmentLoading,
  } = useAddTreatment();
console.log(patientData, id, patientPharmarcy, pharmRefetch )
  const [showTreatmentModal, setShowTreatmentModal] = useState(false)
  const [formData, setFormData] = useState({
    consultationId: cid,
    text: '',
    medication: [
      { medicationId: '', quantity: '', duration: '' }
    ],
    outOfStockDrugs: [
      { drug: '', quantity: '', duration: '' }
    ]
  });


  if (loadingPharmacy || loadingTreatments || addTreatmentLoading) {
    return <Loader />;
  }


  if (addTreatmentStatus === "success") {
    toast.success("Pharmacy order created successfully");
    patientRefetch()
    mutate(null)
  }
  const handleSubmit = async() => {
    console.log(formData);
    await mutate(formData)
    setShowTreatmentModal(false)
  };

  interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    patientId: string;
    gender: string;
    dateOfBirth: string;
    phoneNumber: string;
    lastAppointmentDate: string;
  }
  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    {
      id: 5,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    {
      id: 6,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    {
      id: 7,
      firstName: "John",
      lastName: "Doe",
      patientId: "12345",
      gender: "Male",
      dateOfBirth: "01/01/1990",
      phoneNumber: "555-1234",
      lastAppointmentDate: "02/15/2022",
    },
    // Add more data objects as needed
  ];

  const columns = [
    {
      name: "Patient Name",
      selector: (row: Patient) => `${row.firstName} ${row.lastName}`,
      sortable: true,
      with: "200px",
    },
    {
      name: "Patient ID",
      selector: (row: Patient) => row.patientId,
      sortable: true,
      with: "200px",
    },
    {
      name: "Gender",
      selector: (row: Patient) => row.gender,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row: Patient) => row.dateOfBirth,
      sortable: true,
      with: "200px",
    },
    {
      name: "Phone Number",
      selector: (row: Patient) => row.phoneNumber,
      sortable: true,
      with: "200px",
    },
    {
      name: "Date of Last Appointment",
      selector: (row: Patient) => row.lastAppointmentDate,
      sortable: true,
      with: "500px",
    },
  ];


  return (
    <div>
      <BasicModal
        title="New Pharmacy Order"
        setOpenModal={setShowTreatmentModal}
        openModal={showTreatmentModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="4xl"
        submitHandler={() => handleSubmit()}
      >
        <NewTreatment
          medicationOptions={medicationOptions}
          formData={formData}
          setFormData={setFormData}
        />
      </BasicModal>
      <div className="flex justify-end items-center ">
        <Button className="bg-ha-primary1 text-white" onClick={() => setShowTreatmentModal(true)}>
          Order Pharmacy for Patient
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default PharmacyTable;
