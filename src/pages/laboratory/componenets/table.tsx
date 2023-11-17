import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  patientId: string | number;
  orderDate: any;
  labId: string | number;
  labUnit: string | number;
  patientName: string;
  specimenType: string;
  status: any;
  color?: any;
}

const columns = [
  {
    name: "Patient Name",
    selector: (row: Patient) => row.patientName,
    sortable: true,
      width: "10rem",

  },
  {
    name: "Patient ID",
    selector: (row: Patient) => row.patientId,
    sortable: true,
      width: "10rem",

  },
  {
    name: "Order Date",
    selector: (row: Patient) => row.orderDate,
    sortable: true,
      width: "10rem",

  },
  {
    name: "Lab ID",
    selector: (row: Patient) => row.labId,
    sortable: true,
      width: "10rem",

  },
  {
    name: "Lab Unit",
    selector: (row: Patient) => row.labUnit,
    sortable: true,
      width: "10rem",

  },
  {
    name: "Specimen Type",
    selector: (row: Patient) => (
      <div className="flex items-center">
        <div
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            marginRight: "8px",
            backgroundColor: row.color,
          }}
        ></div>
        {row.specimenType}
      </div>
    ),
    sortable: true,
    width: "10rem",
  },

  {
    name: "Status",
    selector: (row: Patient) => (
      <div className={` px-5 py-3 rounded-[1rem] cursor-pointer text-white w-[10rem]  text-center border ${
        row.status === "Take Specimen"
          ? "bg-yellow-500 hover:bg-yellow-600"
          : row.status === "Receive Specimen"
          ? "bg-blue-500 hover:bg-blue-600"
          : row.status === "Awaiting Specimen"
          ? "bg-green-500 hover:bg-green-600"
          : row.status === "Final Result"
          ? "bg-red-500 hover:bg-red-600"
          : ""
      }`}
      >
        {row.status}
      </div>
    ),
    sortable: true,
    width: "15rem",
  },
  {
    cell: (row: Patient) => (
      <Dropdown arrowIcon={false} inline label={<BsThreeDotsVertical />} >
        <Dropdown.Item>Order Laboratory</Dropdown.Item>
        <Dropdown.Item>Order Radiology</Dropdown.Item>
        <Dropdown.Item>Order Pharmacy</Dropdown.Item>
        <Dropdown.Item>Order OPD</Dropdown.Item>
      </Dropdown>
    ),
    sortable: false,
      width: "20%",

  },
];

const getRandomColor = () => {
  // Generate a random hex color code
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const data: Patient[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    patientId: "P001sus8sj",
    orderDate: "2021-09-01",
    labId: "L0019sje7e",
    labUnit: "mg/dL",
    patientName: "John Doe",
    specimenType: "Blood",
    status: "Take Specimen",
    color: getRandomColor(),
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    patientId: '2jdhd84ne9',
    orderDate: "2021-09-03",
    labId: '3jj388eiw0',
    labUnit: "mmol/L",
    patientName: "Jane Smith",
    specimenType: "Urine",
    status: "Receive Specimen",
    color: getRandomColor(),
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    patientId: "P003s7sjsu",
    orderDate: "2021-09-05",
    labId: '32ekd0dle8',
    labUnit: "g/L",
    patientName: "Alice Johnson",
    specimenType: "Saliva",
    status: "Awaiting Specimen",
    color: getRandomColor(),
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Williams",
    patientId: 'ksos9skrhi004',
    orderDate: "2021-09-07",
    labId: "L0048sksoe",
    labUnit: 75,
    patientName: "Bob Williams",
    specimenType: "Hair",
    status: "Final Result",
    color: getRandomColor(),
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Anderson",
    patientId: "P009lkdid9005",
    orderDate: "2021-09-09",
    labId: "Lhdhjsdks094030305",
    labUnit: "mg/dL",
    patientName: "Eva Anderson",
    specimenType: "Blood",
    status: "Take Specimen",
    color: getRandomColor(),
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
