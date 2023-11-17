import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";

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
  },
  {
    name: "Patient ID",
    selector: (row: Patient) => row.patientId,
    sortable: true,
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
  },
  {
    name: "Phone Number",
    selector: (row: Patient) => row.phoneNumber,
    sortable: true,
  },
  {
    name: "Date of Last Appointment",
    selector: (row: Patient) => row.lastAppointmentDate,
    sortable: true,
  },
  {
    // name: "Actions",
    cell: (row: Patient) => (
      <Dropdown arrowIcon={false} inline label={<BsThreeDotsVertical />}>
        <Dropdown.Item>Order Laboratory</Dropdown.Item>
        <Dropdown.Item>Order Radiology</Dropdown.Item>
        <Dropdown.Item>Order Pharmacy</Dropdown.Item>
        <Dropdown.Item>Order OPD</Dropdown.Item>
      </Dropdown>
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

  // Add more data objects as needed
];

function PatientTable() {
  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default PatientTable;
