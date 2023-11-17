import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  patientId: string | number;
  labId: string | number;
  labUnit: string | number;
  patientName: string;
  specimenType: string;
  status: any;
}

const columns = [
  {
    name: "Patient Name",
    selector: (row: Patient) => row.patientName,
    sortable: true,
  },
  {
    name: "Patient ID",
    selector: (row: Patient) => row.patientId,
    sortable: true,
  },
  {
    name: "Lab ID",
    selector: (row: Patient) => row.labId,
    sortable: true,
  },
  {
    name: "Lab Unit",
    selector: (row: Patient) => row.labUnit,
    sortable: true,
  },
  {
    name: "Specimen Type",
    selector: (row: Patient) => row.specimenType,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: Patient) => row.status,
    sortable: true,
  },
  {
    name: "Actions",
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


const data: Patient[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    patientId: "P001",
    labId: "L001",
    labUnit: "mg/dL",
    patientName: "John Doe",
    specimenType: "Blood",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    patientId: 1002,
    labId: 2002,
    labUnit: "mmol/L",
    patientName: "Jane Smith",
    specimenType: "Urine",
    status: "Inactive",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    patientId: "P003",
    labId: 3003,
    labUnit: "g/L",
    patientName: "Alice Johnson",
    specimenType: "Saliva",
    status: "Active",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Williams",
    patientId: 1004,
    labId: "L004",
    labUnit: 75,
    patientName: "Bob Williams",
    specimenType: "Hair",
    status: "Inactive",
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Anderson",
    patientId: "P005",
    labId: "L005",
    labUnit: "mg/dL",
    patientName: "Eva Anderson",
    specimenType: "Blood",
    status: "Active",
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Brown",
    patientId: 1006,
    labId: 2006,
    labUnit: "mmol/L",
    patientName: "David Brown",
    specimenType: "Urine",
    status: "Inactive",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Miller",
    patientId: "P007",
    labId: 3007,
    labUnit: "g/L",
    patientName: "Grace Miller",
    specimenType: "Saliva",
    status: "Active",
  },
  {
    id: 8,
    firstName: "Charlie",
    lastName: "Jones",
    patientId: 1008,
    labId: "L008",
    labUnit: 80,
    patientName: "Charlie Jones",
    specimenType: "Hair",
    status: "Inactive",
  },
  {
    id: 9,
    firstName: "Sophia",
    lastName: "Wilson",
    patientId: "P009",
    labId: "L009",
    labUnit: "mg/dL",
    patientName: "Sophia Wilson",
    specimenType: "Blood",
    status: "Active",
  },
  {
    id: 10,
    firstName: "Henry",
    lastName: "Davis",
    patientId: 1010,
    labId: 2010,
    labUnit: "mmol/L",
    patientName: "Henry Davis",
    specimenType: "Urine",
    status: "Inactive",
  },
  {
    id: 11,
    firstName: "Olivia",
    lastName: "Moore",
    patientId: "P011",
    labId: 3011,
    labUnit: "g/L",
    patientName: "Olivia Moore",
    specimenType: "Saliva",
    status: "Active",
  },
  {
    id: 12,
    firstName: "Daniel",
    lastName: "Taylor",
    patientId: 1012,
    labId: "L012",
    labUnit: 85,
    patientName: "Daniel Taylor",
    specimenType: "Hair",
    status: "Inactive",
  },
  {
    id: 13,
    firstName: "Emma",
    lastName: "Hill",
    patientId: "P013",
    labId: "L013",
    labUnit: "mg/dL",
    patientName: "Emma Hill",
    specimenType: "Blood",
    status: "Active",
  },
  {
    id: 14,
    firstName: "Jackson",
    lastName: "Adams",
    patientId: 1014,
    labId: 2014,
    labUnit: "mmol/L",
    patientName: "Jackson Adams",
    specimenType: "Urine",
    status: "Inactive",
  },
  {
    id: 15,
    firstName: "Ava",
    lastName: "Baker",
    patientId: "P015",
    labId: 3015,
    labUnit: "g/L",
    patientName: "Ava Baker",
    specimenType: "Saliva",
    status: "Active",
  },
  {
    id: 16,
    firstName: "Noah",
    lastName: "Carter",
    patientId: 1016,
    labId: "L016",
    labUnit: 90,
    patientName: "Noah Carter",
    specimenType: "Hair",
    status: "Inactive",
  },
  {
    id: 17,
    firstName: "Sophie",
    lastName: "Evans",
    patientId: "P017",
    labId: "L017",
    labUnit: "mg/dL",
    patientName: "Sophie Evans",
    specimenType: "Blood",
    status: "Active",
  },
  {
    id: 18,
    firstName: "Liam",
    lastName: "Fisher",
    patientId: 1018,
    labId: 2018,
    labUnit: "mmol/L",
    patientName: "Liam Fisher",
    specimenType: "Urine",
    status: "Inactive",
  },
  {
    id: 19,
    firstName: "Chloe",
    lastName: "Grant",
    patientId: "P019",
    labId: 3019,
    labUnit: "g/L",
    patientName: "Chloe Grant",
    specimenType: "Saliva",
    status: "Active",
  },
  {
    id: 20,
    firstName: "Mason",
    lastName: "Harris",
    patientId: 1020,
    labId: "L020",
    labUnit: 95,
    patientName: "Mason Harris",
    specimenType: "Hair",
    status: "Inactive",
  },
  {
    id: 21,
    firstName: "Zoe",
    lastName: "Ingram",
    patientId: "P021",
    labId: "L021",
    labUnit: "mg/dL",
    patientName: "Zoe Ingram",
    specimenType: "Blood",
    status: "Active",
  },
  {
    id: 22,
    firstName: "Ethan",
    lastName: "James",
    patientId: 1022,
    labId: 2022,
    labUnit: "mmol/L",
    patientName: "Ethan James",
    specimenType: "Urine",
    status: "Inactive",
  },
  {
    id: 23,
    firstName: "Mia",
    lastName: "Kelly",
    patientId: "P023",
    labId: 3023,
    labUnit: "g/L",
    patientName: "Mia Kelly",
    specimenType: "Saliva",
    status: "Active",
  },
  {
    id: 24,
    firstName: "Logan",
    lastName: "Lee",
    patientId: 1024,
    labId: "L024",
    labUnit: 100,
    patientName: "Logan Lee",
    specimenType: "Hair",
    status: "Inactive",
  },
  {
    id: 25,
    firstName: "Aria",
    lastName: "Martin",
    patientId: "P025",
    labId: "L025",
    labUnit: "mg/dL",
    patientName: "Aria Martin",
    specimenType: "Blood",
    status: "Active",
  },
];

function PatientTable() {
  return (
    <div className="rounded-[.5rem] px-10 py-14 bg-white shadow">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default PatientTable;
