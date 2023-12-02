import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { Button } from "../../../components/ui/button";

import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  patientId: string | number;
  orderDate: string;
  imagingId: string | number;
  serviceCenter: string | number;
  patientName: string;
  instructions: string;
  status: string;
  orderBy?: string;
}

function PatientTable() {
  const handleRowDelete = (row: Patient) => {
    console.log(row);
  };

  const columns: any = [
    {
      name: "Patient Name",
      cell: (row: Patient) => (
        <div
          className="text-left capitalize"
          onClick={() => handleRowClick(row.id)}
        >
          {row.patientName}
        </div>
      ),
      selector: (row: Patient) => row.patientName,
      sortable: true,
      grow: 2,
    },
    {
      name: "Order Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.orderDate}
        </div>
      ),
      selector: (row: Patient) => row.orderDate,
      sortable: true,
      width: "9rem",
    },
    {
      name: "Ordered By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.orderBy}
        </div>
      ),
      selector: (row: Patient) => row.orderBy,
      sortable: true,
      width: "11rem",
    },
    {
      name: "Service Center",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.serviceCenter}
        </div>
      ),
      selector: (row: Patient) => row.serviceCenter,
      sortable: true,
      grow: 2,
    },
    {
      name: "Instructions",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.instructions}
        </div>
      ),
      selector: (row: Patient) => row.instructions,
      sortable: true,
      grow: 3,
    },
    {
      name: "Status",
      cell: (row: Patient) => (
        <div>
          <Button
            className={` text-white w-full ${
              row.status === "Scheduled"
                ? "bg-purple-400 hover:bg-purple-500"
                : "bg-green-700 hover:bg-green-900"
            }`}
            onClick={() => handleRowClick(row.id)}
          >
            {row.status}
          </Button>
        </div>
      ),
      selector: (row: Patient) => row.status,
      sortable: true,
      width: "9rem",
    },
    {
      cell: (row: Patient) => (
        <div className=" w-full flex justify-end items-center">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              size="lg"
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item onClick={() => handleRowDelete(row)}>
                Cancel
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  const data: Patient[] = [
    {
      id: 1,
      firstName: "Sophie",
      lastName: "Harris",
      patientId: "1",
      orderDate: "2021-09-22",
      imagingId: "Lxyz987654",
      serviceCenter: "Radiology B",
      patientName: "Sophie Harris",
      instructions: "give patient 2 glasses of water before the test",
      status: "Scheduled",
      orderBy: "Dr. Christopher Johnson",
    },
    {
      id: 2,
      firstName: "Mason",
      lastName: "Martin",
      patientId: "2",
      orderDate: "2023-11-17 13:02",
      imagingId: "Lpqr123456",
      serviceCenter: "CT Scan Center",
      patientName: "Mason Martin",
      instructions: "give patient 2 maleria tablets before the test",
      status: "Open",
      orderBy: "Dr. Elizabeth White",
    },
    {
      id: 3,
      firstName: "Ava",
      lastName: "Cooper",
      patientId: "3",
      orderDate: "2021-09-26",
      imagingId: "Lmno987654",
      serviceCenter: "Ultrasound Department",
      patientName: "Ava Cooper",
      instructions: "GIve patient 5 injections before the test",
      status: "Scheduled",
      orderBy: "Dr. Benjamin Davis",
    },
    {
      id: 4,
      firstName: "Elijah",
      lastName: "Diaz",
      patientId: "4",
      orderDate: "2021-09-28",
      imagingId: "Lstu123456",
      serviceCenter: "Cardiology Clinic",
      patientName: "Elijah Diaz",
      instructions: "Give patient 2 glasses of water before the test",
      status: "Open",
      orderBy: "Dr. Madison Smith",
    },
    {
      id: 5,
      firstName: "Oliver",
      lastName: "Baker",
      patientId: "5",
      orderDate: "2021-09-30",
      imagingId: "Lqwer123456",
      serviceCenter: "Endoscopy Unit",
      patientName: "Oliver Baker",
      instructions: "Give patient 2 glasses of water before the test",
      status: "Scheduled",
      orderBy: "Dr. William Johnson",
    },
  ];

  // expnad rows

  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const navigate = useNavigate();

  const handleRowClick = (patientId: number) => {
    navigate(`/nursing/${patientId}`);
    console.log(patientId);
  };

  return (
    <>
      <div className="rounded-[.5rem] px-10 py-14 bg-white shadow">
        <DataTable
          columns={columns}
          data={data}
          pointerOnHover={true}
          onRowClicked={(row) => {
            handleRowClick(row.id);
          }}
        />
      </div>
    </>
  );
}

export default PatientTable;
