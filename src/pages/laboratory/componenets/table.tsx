import { Tooltip } from "flowbite-react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineCancel } from "react-icons/md";
import BasicModal from "../../../components/ui/modals/basicModal";
import AwaitingApproval from "./modal/awaitingApproval";
import FillSpecimen from "./modal/fillSpecimen";
import CancelLabOrder from "./modal/cancelLabOrder";
import FinalResult from "./modal/finalResult";
import { Button } from "../../../components/ui/button";
import { useUpdateReceiveLab } from "../../../hooks/reactQuery/useLabs";
import Loader from "../../../components/ui/loader";
import ReceiveSpecimen from "./modal/receiveSpecimen";
import labService from "../../../services/labService";
import { toast } from "react-toastify";
import { useQuery} from "react-query";

function Table({ labSearch, reload, setReload }) {
  const [receiveSpecimen, setReceiveSpecimen] = useState(false);
  const [awaitingApproval, setAwaitingApproval] = useState(false);
  const [finalResult, setFinalResult] = useState(false);
  const [receiveComment, setReceiveComment] = useState("");
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [fillResult, setFillResult] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const {
    mutate,
    status: receiveStatus,
  } = useUpdateReceiveLab();

  if (receiveStatus === "success") {
    toast.success("Lab order received successfully");
  }

  const { data: labData, isLoading: labLoading } = useQuery(
    ["labs", page],
    () => labService.getLab(page)
  );

  useEffect(() => {
    setPageData(labData);
  }, [labData]);

  const fetchData = async (newpage) => {
    try {
      const data = await labService.getLab(newpage);
      setPageData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(page);
  }, [page]);

  if (reload) {
    fetchData(page);
    setReload(false);
  }
  //function for date and time format
  function formatDateTime(inputDate) {
    const originalDate = new Date(inputDate);
    // Create an options object with the desired date and time format
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(originalDate);
  }

  const openDeleteRow = (row) => {
    setSelectedRowData(row);
    setDeleteDialogOpen(true);
  };

  const handlePageChange = async (page) => {
    setPage(page);
  };

  const handleReceiveSpecimeApi = async () => {
    try {
      const receiveCommnent = {
        text: receiveComment,
      };
      await mutate({ id: selectedId, data: receiveCommnent });
      setReceiveSpecimen(false);
      setReload(true);
    } catch (error) {
      // Handle the error here
      console.error("An error occurred:", error);
    }
  };

  const columns: any = [
    {
      name: "Name",
      cell: (row) => (
        <div className="text-left">
          {row.patientId.firstName} {row.patientId.lastName}
        </div>
      ),
      selector: (row) => row.patientId.firstName,
      sortable: true,
      width: "full",
    },

    {
      name: "Order Date",
      cell: (row) => (
        <div className="text-left">
          {formatDateTime(new Date(row.createdAt))}
        </div>
      ),
      selector: (row) => row.createdAt,
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
      name: "Lab Test",
      cell: (row) => <div className="text-left">{row.panelId.panel}</div>,
      selector: (row) => row.panelId.panel,
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
                  backgroundColor: row.panelId.specimenId.color,
                }}
              ></p>
            </div>
            <span> {row.panelId.specimenId.specimen}</span>
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
            setSelectedId(row.id);
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
      selector: (row) => row.status,
      sortable: true,
      width: "15rem",
    },
    {
      cell: (row) => (
        <Tooltip content="Cancle order">
          <MdOutlineCancel
            onClick={() => openDeleteRow(row)}
            className="font-extrabold text-xl text-red-400"
          />
        </Tooltip>
      ),
      sortable: false,
      width: "3rem",
    },
  ];
  // here is the role is being selected
  return (
    <>
      {labLoading && <Loader />}
      <div className="rounded-[.5rem] px-2 py-10  bg-white shadow">
        <DataTable
          columns={columns}
          data={
            labSearch?.data && labSearch?.data.length > 0
              ? labSearch?.data
              : pageData?.data?.labs
          }
          pagination
          onChangePage={handlePageChange}
        />
      </div>

      {/* // delete dialog */}
      <CancelLabOrder
        setDeleteDialogOpen={setDeleteDialogOpen}
        deleteDialogOpen={deleteDialogOpen}
        selectedRowData={selectedRowData}
        setReload={setReload}
      />

      {/* // receive specimen modal */}
      <BasicModal
        title="Receive Specimen"
        setOpenModal={setReceiveSpecimen}
        cancelTitle="Cancel"
        openModal={receiveSpecimen}
        showCancelButton={true}
        submitTitle="Save"
        showSubmitButton={true}
        submitHandler={handleReceiveSpecimeApi}
        size="5xl"
      >
        <ReceiveSpecimen
          selectedRowData={selectedRowData}
          setReceiveComment={setReceiveComment}
          receiveComment={receiveComment}
        />
      </BasicModal>

      {/* <BasicModal
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
      </BasicModal> */}

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
        <FillSpecimen
          selectedRowData={selectedRowData}
          setFillResult={setFillResult}
          fillResult={fillResult}
        />
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
