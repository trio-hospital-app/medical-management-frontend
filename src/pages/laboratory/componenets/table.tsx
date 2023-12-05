import { Tooltip } from "flowbite-react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineCancel } from "react-icons/md";
import BasicModal from "../../../components/ui/modals/basicModal";
import FillSpecimen from "./modal/fillSpecimen";
import AwaitingApproval from "./modal/awaitingApproval";
import FinalResult from "./modal/finalResult";
import { Button } from "../../../components/ui/button";
import { useGetLab } from "../../../hooks/reactQuery/useLabs";
import Loader from "../../../components/ui/loader";

function Table({ labSearch }) {
  const [receiveSpecimen, setReceiveSpecimen] = useState(false);
  const [awaitingApproval, setAwaitingApproval] = useState(false);
  const [finalResult, setFinalResult] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});

  const { data: labData, isLoading: LoadingLab } = useGetLab();

  if (LoadingLab) {
    return <Loader />;
  }

  //render the lab data from the api call
  const Data = labSearch?.data ? labSearch.data : labData?.data.labs;

  const handleReceiveSpecime = () => {
    setReceiveSpecimen(false);
  };

  const handleRowDelete = (row) => {
    console.log(row.id);
  };
  const columns: any = [
    {
      name: "Name",
      cell: (row) => (
        <div className="text-left">
          {row.patientId.firstName} {row.patientId.lastName}
        </div>
      ),
      selector: "patientName",
      sortable: true,
      width: "full",
    },

    {
      name: "Order Date",
      cell: (row) => <div className="text-left">{row.createdAt}</div>,
      selector: "orderDate",
      sortable: true,
      width: "full",
    },

    {
      name: "Lab Department",
      selector: (row) => <div className="text-left">{row.centerId.center}</div>,
      sortable: true,
      // width: "full",
    },
    {
      name: "Lap Test",
      cell: (row) => <div className="text-left">{row.panelId.panel}</div>,
      selector: "panelName",
      sortable: true,
      // width: "full",
    },
    {
      name: "Specimen Type",
      cell: (row) => (
        <div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <div>
              <p
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  backgroundColor: row.specimenId.color,
                }}
              ></p>
            </div>
            <span> {row.specimenId.specimen}</span>
          </div>
        </div>
      ),
      sortable: true,
      // grow: 3,
    },
    {
      name: "Status",
      cell: (row) => (
        <Button
          className={` text-white w-[9.5rem] ${
            row.status === "receive specimen"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : row.status === "awaiting approval"
                ? "bg-blue-500 hover:bg-blue-600"
                : row.status === "final result"
                  ? "bg-green-500 hover:bg-green-600"
                  : row.status === "'"
          }`}
          onClick={() => {
            setSelectedRowData(row);
            row.status === "receive specimen"
              ? setReceiveSpecimen(true)
              : row.status === "awaiting approval"
                ? setAwaitingApproval(true)
                : row.status === "final result" // Corrected status here
                  ? setFinalResult(true)
                  : row.status === "null";
          }}
        >
          {row.status
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Button>
      ),
      selector: "status",
      sortable: true,
      width: "15rem",
    },
    {
      cell: (row) => (
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

  const handleRowClick = (row) => {
    setSelectedRowData(row);
  };

  return (
    <>
      <div className="rounded-[.5rem] px-10 py-14 bg-white shadow">
        <DataTable
          columns={columns}
          data={Data || []}
          onRowClicked={(row) => handleRowClick(row)}
        />
      </div>

      {/* // receive specimen modal */}
      <BasicModal
        title="Fill Result"
        setOpenModal={setReceiveSpecimen}
        cancelTitle="Cancel"
        openModal={receiveSpecimen}
        showCancelButton={true}
        submitTitle="Save"
        showSubmitButton={true}
        submitHandler={handleReceiveSpecime}
        size="5xl"
      >
        <FillSpecimen selectedRowData={selectedRowData} />
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
        size="5xl"
      >
        <AwaitingApproval />
      </BasicModal>

      {/* final result modal */}

      <BasicModal
        title="Approved Result"
        setOpenModal={setFinalResult}
        cancelTitle="Cancel"
        openModal={finalResult}
        showCancelButton={true}
        submitTitle="Print"
        showSubmitButton={true}
        size="5xl"
      >
        <FinalResult />
      </BasicModal>
    </>
  );
}

export default Table;
