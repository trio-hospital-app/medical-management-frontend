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
  date: string;
  createdBy: string;
  description: string;
  scheduledDate: string;
  scheduledBy: string;
  closeDate: string;
  performedBy: string;
}

function TaskTable() {
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
      name: "Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.date}
        </div>
      ),
      selector: (row: Patient) => row.date,
      sortable: true,
      width: "9rem",
    },
    {
      name: "Created By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.createdBy}
        </div>
      ),
      selector: (row: Patient) => row.createdBy,
      sortable: true,
      width: "11rem",
    },
    {
      name: "Description",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.description}
        </div>
      ),
      selector: (row: Patient) => row.description,
      sortable: true,
      grow: 3,
    },
    {
      name: "Scheduled Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.scheduledDate}
        </div>
      ),
      selector: (row: Patient) => row.scheduledDate,
      sortable: true,
      width: "9rem",
    },
    {
      name: "Scheduled By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.scheduledBy}
        </div>
      ),
      selector: (row: Patient) => row.scheduledBy,
      sortable: true,
      width: "11rem",
    },
    {
      name: "Close Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.closeDate}
        </div>
      ),
      selector: (row: Patient) => row.closeDate,
      sortable: true,
      width: "9rem",
    },
    {
      name: "Performed By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.id)}>
          {row.performedBy}
        </div>
      ),
      selector: (row: Patient) => row.performedBy,
      sortable: true,
      width: "11rem",
    },
    {
      name: "Status",
      cell: (row: Patient) => (
        <div className="w-full">
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
      date: "2021-09-22",
      createdBy: "Dr. Christopher Johnson",
      description: "Sample description 1",
      scheduledDate: "2021-09-22",
      scheduledBy: "Dr. Christopher Johnson",
      closeDate: "2021-09-23",
      performedBy: "Dr. Christopher Johnson",
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
      instructions: "give patient 2 malaria tablets before the test",
      status: "Open",
      orderBy: "Dr. Elizabeth White",
      date: "2023-11-17",
      createdBy: "Dr. Elizabeth White",
      description: "Sample description 2",
      scheduledDate: "N/A",
      scheduledBy: "N/A",
      closeDate: "N/A",
      performedBy: "N/A",
    },
  ];

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

export default TaskTable;
