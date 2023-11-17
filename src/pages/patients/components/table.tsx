import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../../components/ui/modals/basicModal";
import { useState } from "react";
import OrderLab from "./OrderLab";

function PatientTable() {
  const [showLabModal, setShowLabModal] = useState(false);
  const [showImagingModal, setShowImagingModal] = useState(false);
  // const [showpharmacyModal, setShowpharmacyModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);

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
    {
      cell: () => (
        <div className=" w-full flex justify-end items-center ">
          <Dropdown arrowIcon={false} inline label={<BsThreeDotsVertical />}>
            <Dropdown.Item
              onClick={() => {
                setShowLabModal(true);
              }}
            >
              Order Laboratory
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setShowImagingModal(true);
              }}
            >
              Order Radiology
            </Dropdown.Item>
            {/* <Dropdown.Item
              onClick={() => {
                setShowpharmacyModal(true);
              }}
            >
              Order Pharmacy
            </Dropdown.Item> */}
            <Dropdown.Item
              onClick={() => {
                setShowDoctorModal(true)
              }}
            >
              See a Doctor
            </Dropdown.Item>
          </Dropdown>
        </div>
      ),
      sortable: false,
    },
  ];

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

  const navigate = useNavigate();

  const handleRowClick = (patientId: number) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
      <DataTable
        columns={columns}
        data={data}
        onRowClicked={(row) => handleRowClick(row.id)}
      />
      {/* lab modal */}
      <BasicModal
        title="Order Laboratory Tests"
        setOpenModal={setShowLabModal}
        cancelTitle="Cancel Order"
        openModal={showLabModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        showSubmitButton={true}
      >
        <OrderLab/>
      </BasicModal>

      {/* Imaging modal */}
      <BasicModal
        title="Order Radiology Tests"
        setOpenModal={setShowImagingModal}
        cancelTitle="Cancel Order"
        openModal={showImagingModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        showSubmitButton={true}
      >
        chisom
      </BasicModal>

      {/* Doctor encounter modal */}
      <BasicModal
        title="See A Doctor"
        setOpenModal={setShowDoctorModal}
        cancelTitle="Cancel Order"
        openModal={showDoctorModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        showSubmitButton={true}
      >
        chisom
      </BasicModal>

    </div>
  );
}

export default PatientTable;
