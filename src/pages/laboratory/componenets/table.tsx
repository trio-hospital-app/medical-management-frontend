import { Tooltip } from "flowbite-react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineCancel } from "react-icons/md";
import BasicModal from "../../../components/ui/modals/basicModal";
import TakeSpecimen from "./modal/takeSpecimen";
import FillSpecimen from "./modal/fillSpecimen";
import AwaitingApproval from "./modal/awaitingApproval";
import FinalResult from "./modal/finalResult";
import { Button } from "../../../components/ui/button";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  patientId: string | number;
  orderDate: any;
  labId: string | number;
  labUnit: string | number;
  patientName: string;
  specimenType: any;
  status: any;
  color?: any;
  panelName?: string;
}

function PatientTable() {
  const [takeSpecimen, setTakeSpecimen] = useState(false);
  const [receiveSpecimen, setReceiveSpecimen] = useState(false);
  const [awaitingApproval, setAwaitingApproval] = useState(false);
  const [finalResult, setFinalResult] = useState(false);

  const handleTakeSpecime = () => {
    console.log("take specimen");
    setTakeSpecimen(false);
  };

  const handleRowDelete = (row: Patient) => {
    console.log(row);
  };

  const getSpecimenTypeContent = (row: Patient) => (
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
  );

  const columns: any = [
    {
      name: "Patient Name",
      cell: (row: Patient) => (
        <div className="text-left">{row.patientName}</div>
      ),
      sortable: true,
    },
    {
      name: "Patient ID",
      selector: (row: Patient) => `${row.patientId}`,
      sortable: true,
    },
    {
      name: "Order Date",
      selector: (row: Patient) => `${row.orderDate}`,
      sortable: true,
      // width: "full",
    },
    {
      name: "Lab ID",
      selector: (row: Patient) => `${row.labId}`,
      sortable: true,
      // width: "9rem",
    },
    {
      name: "Lab Unit",
      selector: (row: Patient) => `${row.labUnit}`,
      sortable: true,
      // width: "6rem",
    },
    {
      name: "Panel Name",
      selector: (row: Patient) => `${row.panelName}`,
      sortable: true,
      width: "full",
    },
    {
      name: "Specimen Type",
      cell: (row: Patient) => getSpecimenTypeContent(row),
      sortable: true,
      grow: 2,
    },
    {
      name: "Status",
      selector: (row: Patient) => (
        <Button
          className={` text-white w-[8rem] ${
            row.status === "Take Specimen"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : row.status === "Receive Specimen"
              ? "bg-blue-500 hover:bg-blue-600"
              : row.status === "Awaiting Approval"
              ? "bg-green-500 hover:bg-green-600"
              : row.status === "Final Result"
              ? "bg-red-500 hover:bg-red-600"
              : ""
          }`}
          onClick={() =>
            row.status === "Take Specimen"
              ? setTakeSpecimen(true)
              : row.status === "Receive Specimen"
              ? setReceiveSpecimen(true)
              : row.status === "Awaiting Approval" // Corrected status here
              ? setAwaitingApproval(true)
              : row.status === "Final Result"
              ? setFinalResult(true)
              : null
          }
        >
          {row.status}
        </Button>
      ),
      sortable: true,
      width: "11rem",
    },
    {
      cell: (row: Patient) => (
        <Tooltip content="Cancle order">
          <MdOutlineCancel
            onClick={() => handleRowDelete(row)}
            className="font-extrabold text-xl text-red-400"
          />
        </Tooltip>
      ),
      sortable: false,
      width: "3rem",
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
      patientId: "P001sus8seeeee3e3e3e3j",
      orderDate: "2021-09-01",
      labId: "L0019sje7e44444444",
      labUnit: "mg/dL",
      patientName: "abraham christopher",
      specimenType: "Urine Analysis",
      panelName: "Hepatitis B Panel",
      status: "Take Specimen",
      color: getRandomColor(),
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      patientId: "2jdhd84ne9",
      orderDate: "2021-09-03",
      labId: "3jj388eiw0",
      labUnit: "mmol/L",
      patientName: "Jane Smith",
      specimenType: "Blood Gas Analysis and me",
      panelName: "Hepatitis B Panel",
      status: "Receive Specimen",
      color: getRandomColor(),
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      patientId: "P003s7sjsu",
      orderDate: "2021-09-05",
      labId: "32ekd0dle8",
      labUnit: "g/L",
      patientName: "Alice Johnson",
      specimenType: "Saliva Analysis",
      status: "Awaiting Approval",
      panelName: "Hepatitis B Panel",
      color: getRandomColor(),
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Williams",
      patientId: "ksos9skrhi004",
      orderDate: "2021-09-07",
      labId: "L0048sksoe",
      labUnit: 75,
      patientName: "Bob Williams",
      specimenType: "Hair Analysis",
      status: "Final Result",
      panelName: "Hepatitis B Panel",
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
      panelName: "Hepatitis B Panel",
      color: getRandomColor(),
    },
  ];

  return (
    <>
      <div className="rounded-[.5rem] px-10 py-14 bg-white shadow">
        <DataTable columns={columns} data={data} />
      </div>

      {/* // take specimen modal */}
      <BasicModal
        title="Take Specimen"
        setOpenModal={setTakeSpecimen}
        cancelTitle="cancel"
        openModal={takeSpecimen}
        showCancelButton={true}
        submitTitle="Save"
        showSubmitButton={true}
        style={{ width: "100%", height: "1/2" }}
        submitHandler={handleTakeSpecime}
      >
        <TakeSpecimen />
      </BasicModal>

      {/* // receive specimen modal */}
      <BasicModal
        title="Fill Result"
        setOpenModal={setReceiveSpecimen}
        cancelTitle="cancel"
        openModal={receiveSpecimen}
        showCancelButton={true}
        submitTitle="Save"
        showSubmitButton={true}
      >
        <FillSpecimen />
      </BasicModal>

      {/* // awaiting specimen modal */}
      <BasicModal
        title="Awaiting Approval"
        setOpenModal={setAwaitingApproval}
        cancelTitle="Reject"
        openModal={awaitingApproval}
        showCancelButton={true}
        submitTitle="Approve"
        showSubmitButton={true}
      >
        <AwaitingApproval />
      </BasicModal>

      {/* final result modal */}

      <BasicModal
        title="Approved Result"
        setOpenModal={setFinalResult}
        cancelTitle="cancel"
        openModal={finalResult}
        showCancelButton={true}
        submitTitle="Print"
        showSubmitButton={true}
      >
        <FinalResult />
      </BasicModal>
    </>
  );
}

export default PatientTable;
