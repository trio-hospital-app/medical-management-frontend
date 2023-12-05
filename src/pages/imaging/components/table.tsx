import { Dropdown } from "flowbite-react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import BasicModal from "../../../components/ui/modals/basicModal";
import { Button } from "../../../components/ui/button";
import CaptureImaging from "./modal/CaptureImaging";
import ReportImaging from "./modal/ReportImaging";
import { BsThreeDotsVertical } from "react-icons/bs";
interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  patientId: string | number;
  orderDate: string;
  imagingId: string | number;
  serviceCenter: string | number;
  patientName: string;
  observation: string;
  status: string;
  orderBy?: string;
}

function PatientTable() {
  const [captureModal, setCaptureModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  const handleCaptureImaging = () => {
    console.log("capturing imaging");
    setCaptureModal(false);
  };

  const handleRowDelete = (row: Patient) => {
    console.log(row);
  };
  const handleRowPrint = (row: Patient) => {
    console.log(row);
  };
  const handleRowSend = (row: Patient) => {
    console.log(row);
  };

  const columns: any = [
    {
      name: "Patient Name",
      cell: (row: Patient) => (
        <div className="text-left capitalize">{row.patientName}</div>
      ),
      selector: "patientName",
      sortable: true,
      width: "full",
    },
    {
      name: "Order Date",
      cell: (row: Patient) => <div className="text-left">{row.orderDate}</div>,
      selector: "orderDate",
      sortable: true,
      width: "full",
    },

    {
      name: "Ordered By",
      cell: (row: Patient) => <div className="text-left">{row.orderBy}</div>,
      selector: "orderBy",
      sortable: true,
      width: "11rem",
    },
    {
      name: "Service Center",
      cell: (row: Patient) => (
        <div className="text-left">{row.serviceCenter}</div>
      ),
      selector: "serviceCenter",
      sortable: true,
      width: "11rem",
    },
    {
      name: "Observation",
      cell: (row: Patient) => (
        <div className="text-left">{row.observation}</div>
      ),
      selector: "observation",
      sortable: true,
      width: "15rem",
    },

    {
      name: "Status",
      cell: (row: Patient) => (
        <div className="w-full">
          <Button
            className={` text-white w-full ${
              row.status === "Report"
                ? "bg-purple-400 hover:bg-purple-500"
                : "bg-green-700 hover:bg-green-900"
            }`}
            onClick={() =>
              row.status === "Report"
                ? setReportModal(true)
                : row.status === "Capture"
                  ? setCaptureModal(true)
                  : null
            }
          >
            {row.status}
          </Button>
        </div>
      ),
      selector: "status",
      sortable: true,
      width: "full",
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
              <Dropdown.Item onClick={() => handleRowPrint(row)}>
                Print Report
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRowSend(row)}>
                Send Report
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRowDelete(row)}>
                Cancel Report
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
      patientId: "P011abcde123",
      orderDate: "2021-09-22",
      imagingId: "Lxyz987654",
      serviceCenter: "Radiology B",
      patientName: "Sophie Harris",
      observation: "MRI Scan for Headache Evaluation and many other things",
      status: "Capture",
      orderBy: "Dr. Christopher Johnson",
    },
    {
      id: 2,
      firstName: "Mason",
      lastName: "Martin",
      patientId: "P012qwerty456",
      orderDate: "2023-11-17 13:02",
      imagingId: "Lpqr123456",
      serviceCenter: "CT Scan Center",
      patientName: "Mason Martin",
      observation: "CT Scan for Abdominal Pain",
      status: "Report",
      orderBy: "Dr. Elizabeth White",
    },
    {
      id: 3,
      firstName: "Ava",
      lastName: "Cooper",
      patientId: "P013zxcvb789",
      orderDate: "2021-09-26",
      imagingId: "Lmno987654",
      serviceCenter: "Ultrasound Department",
      patientName: "Ava Cooper",
      observation: "Ultrasound for Pregnancy",
      status: "Capture",
      orderBy: "Dr. Benjamin Davis",
    },
    {
      id: 4,
      firstName: "Elijah",
      lastName: "Diaz",
      patientId: "P014lkdid9009",
      orderDate: "2021-09-28",
      imagingId: "Lstu123456",
      serviceCenter: "Cardiology Clinic",
      patientName: "Elijah Diaz",
      observation: "Cardiac Stress Test",
      status: "Report",
      orderBy: "Dr. Madison Smith",
    },
    {
      id: 5,
      firstName: "Oliver",
      lastName: "Baker",
      patientId: "P015poiuy111",
      orderDate: "2021-09-30",
      imagingId: "Lqwer123456",
      serviceCenter: "Endoscopy Unit",
      patientName: "Oliver Baker",
      observation: "Lower GI Endoscopy",
      status: "Capture",
      orderBy: "Dr. William Johnson",
    },
  ];

  // expnad rows

  // const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <>
      <div className="rounded-[.5rem] px-10 py-14 bg-white shadow">
        <DataTable columns={columns} data={data} />
      </div>

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
        <CaptureImaging />
      </BasicModal>

      {/* // report imaging modal */}
      <BasicModal
        title="Report Imaging"
        setOpenModal={setReportModal}
        cancelTitle="Cancel"
        openModal={reportModal}
        showCancelButton={true}
        submitTitle="Save"
        showSubmitButton={true}
        size="5xl"
      >
        <ReportImaging />
      </BasicModal>
    </>
  );
}

export default PatientTable;
