import { Tooltip } from "flowbite-react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import BasicModal from "../../../components/ui/modals/basicModal";
import { Button } from "../../../components/ui/button";
import CaptureImaging from "./modal/CaptureImaging";
import { useQuery } from "react-query";
import radiologyService from "../../../services/radiologyService";
import { MdOutlineCancel } from "react-icons/md";
import Loader from "../../../components/ui/loader";
import CancelRadiologyOrder from "./modal/CancelRadiologyOrder";
import {
  useUpdateCapture,
  useUpdateRadiologyResult,
} from "../../../hooks/reactQuery/useRadiology";
import AwaitingImagingReport from "./modal/AwaitingImagingReport";
import ReportImaging from "./modal/ReportImaging";
import { toast } from "react-toastify";

function PatientTable({ reload, setReload, radiologySearch }) {
  const [captureModal, setCaptureModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [resultModal, setResultModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [captureComment, setCaptureComment] = useState("");
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState(null);
  const [resultData, setResultData] = useState([]);

  const { mutate: mutateCapture, status: captureStatus } = useUpdateCapture();
  const { mutate: mutateImagingResult, status: statusResult } =
    useUpdateRadiologyResult();

  const { data: RadiologyData, isLoading: radiologyLoading } = useQuery(
    ["radiologys", page],
    () => radiologyService.getRadiology(page),
  );
  if (statusResult === "success") {
    toast.success("Imaging Report Submitted Successfully");
    mutateImagingResult(null);
  }
  if (captureStatus === "success") {
    toast.success("Imaging Captured Successfully");
    mutateCapture(null);
  }

  useEffect(() => {
    setPageData(RadiologyData);
  }, [RadiologyData]);

  const fetchData = async (newpage) => {
    try {
      const data = await radiologyService.getRadiology(newpage);
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

  const handleCaptureImaging = async () => {
    try {
      const comment = {
        text: captureComment,
      };
      await mutateCapture({ id: selectedId, data: comment });
      setCaptureModal(false);
      setReload(true);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleFillImagingApi = async () => {
    try {
      const ImagingResult = resultData;
      await mutateImagingResult({ id: selectedId, data: ImagingResult });
      setReportModal(false);
      setReload(true);
    } catch (error) {
      // Handle the error here
      console.error("An error occurred:", error);
    }
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#ffff",
        text: "bold",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        minHeight: "56px",
        textTransform: "capitalize",
        cursor: "default",
      },
    },
  };

  const columns: any = [
    {
      name: "Patient Name",
      cell: (row) => (
        <div className="text-left capitalize">
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
      name: "Ordered By",
      selector: (row) => (
        <div className="text-left capitalize">
          {" "}
          {row.orderBy.firstName} {row.orderBy.lastName}
        </div>
      ),
      sortable: true,
      // width: "full",
    },
    {
      name: "Radiology Test",
      cell: (row) => (
        <div className="text-left capitalize">{row?.testId.test}</div>
      ),
      selector: (row) => row.testId.test,
      sortable: true,
      // width: "full",
    },
    {
      name: "Radiology Unit",
      cell: (row) => (
        <div className="text-left capitalize">{row?.centerId.center}</div>
      ),
      selector: (row) => row.testId.test,
      sortable: true,
      // width: "full",
    },

    {
      name: "Status",
      cell: (row) => (
        <>
          {!row.paid ? (
            <Tooltip content="Please Make Payment" placement="top">
              <Button
                className={` text-white w-[9.5rem] capitalize ${
                  row.status === "awaiting result"
                    ? "bg-purple-400 hover:bg-purple-500"
                    : row.status === "capture"
                      ? "bg-red-400 hover:bg-red-500"
                      : row.status === "report"
                        ? "bg-green-400 hover:bg-green-500"
                        : row.status === ""
                }`}
                onClick={() => {
                  if (!row.paid) {
                    setSelectedRowData(row);
                    setSelectedId(row.id);
                    row.status === "awaiting result"
                      ? setReportModal(true)
                      : row.status === "capture"
                        ? setCaptureModal(true)
                        : row.status === "report"
                          ? setResultModal(true)
                          : row.status === "null";
                  }
                }}
                disabled={!row.paid}
              >
                {row.status
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Button>
            </Tooltip>
          ) : (
            <Button
              className={` text-white w-[9.5rem] capitalize ${
                row.status === "awaiting result"
                  ? "bg-purple-400 hover:bg-purple-500"
                  : row.status === "capture"
                    ? "bg-red-400 hover:bg-red-500"
                    : row.status === "report"
                      ? "bg-green-400 hover:bg-green-500"
                      : row.status === ""
              }`}
              onClick={() => {
                setSelectedRowData(row);
                setSelectedId(row.id);
                row.status === "awaiting result"
                  ? setReportModal(true)
                  : row.status === "capture"
                    ? setCaptureModal(true)
                    : row.status === "report"
                      ? setResultModal(true)
                      : row.status === "null";
              }}
            >
              {row.status
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Button>
          )}
        </>
      ),
      selector: (row) => row.status,
      sortable: true,
      width: "15rem",
    },
    {
      cell: (row) => {
        if (!row.paid) {
          return (
            <Tooltip content="Cancel order">
              <MdOutlineCancel
                onClick={() => openDeleteRow(row)}
                className="font-extrabold text-xl text-red-400"
              />
            </Tooltip>
          );
        } else {
          return null;
        }
      },
      sortable: false,
      width: "3rem",
    },
  ];

  return (
    <>
      {radiologyLoading && <Loader />}

      <div className="rounded-[.5rem] px-2 py-10  bg-white shadow">
        <DataTable
          customStyles={{
            headCells: {
              style: {
                backgroundColor: customStyles.headCells.style.backgroundColor,
                text: customStyles.headCells.style.text,
                fontWeight: customStyles.headCells.style.fontWeight,
                fontSize: customStyles.headCells.style.fontSize,
              },
            },
            rows: {
              style: {
                minHeight: customStyles.rows.style.minHeight,
                textTransform: "none", // Update the textTransform property to have the correct type
                cursor: customStyles.rows.style.cursor,
              },
            },
          }}
          columns={columns}
          data={
            radiologySearch?.data && radiologySearch?.data.length > 0
              ? radiologySearch?.data
              : pageData?.data?.radiology
          }
          pagination
          onChangePage={handlePageChange}
        />
      </div>

      <CancelRadiologyOrder
        setDeleteDialogOpen={setDeleteDialogOpen}
        deleteDialogOpen={deleteDialogOpen}
        selectedRowData={selectedRowData}
        setReload={setReload}
      />

      {/* // Capture Imaging modal */}
      <BasicModal
        title="Capture Imaging"
        setOpenModal={setCaptureModal}
        cancelTitle="Cancel"
        openModal={captureModal}
        showCancelButton={true}
        submitTitle="Capture"
        showSubmitButton={true}
        style={{ width: "100%", height: "1/2" }}
        submitHandler={handleCaptureImaging}
        size="5xl"
      >
        <CaptureImaging
          selectedRowData={selectedRowData}
          setCaptureComment={setCaptureComment}
          captureComment={captureComment}
        />
      </BasicModal>

      {/* // report imaging modal */}
      <BasicModal
        title="Awaiting Imaging Report"
        setOpenModal={setReportModal}
        cancelTitle="Cancel"
        openModal={reportModal}
        showCancelButton={true}
        submitTitle="Submit"
        showSubmitButton={true}
        submitHandler={handleFillImagingApi}
        size="5xl"
      >
        <AwaitingImagingReport
          selectedRowData={selectedRowData}
          setResultData={setResultData}
        />
      </BasicModal>
      <BasicModal
        title="Imaging Report"
        setOpenModal={setResultModal}
        cancelTitle="Cancel"
        openModal={resultModal}
        showCancelButton={true}
        submitTitle="Print"
        showSubmitButton={true}
        size="5xl"
      >
        <ReportImaging
          selectedRowData={selectedRowData}
          setReload={setReload}
        />
      </BasicModal>
    </>
  );
}

export default PatientTable;
