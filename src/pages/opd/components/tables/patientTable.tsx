import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useEffect, useState } from "react";
import OrderRadiology from "../orderRadiology";
import OrderDoctor from "../orderDoctor";
import { formatDate } from "../../../../hooks/formattedDate";
import PatientService from "../../../../services/patientService";
import Loader from "../../../../components/ui/loader";
import NewLabOrder from "./newLabOrder";

function PatientTable({ patientData }) {
  interface PageData {
    data: {
      totalItems: number;
      patients: Patient[];
    };
  }
  const navigate = useNavigate();
  const [formComment, setFormComment] = useState("");
  const [selectLabPanel, setselectLabPanel] = useState([]);
  const [selectScheme, setSelectedScheme] = useState([]);
  const [pageData, setPageData] = useState<PageData>(null);
  const [showLabModal, setShowLabModal] = useState(false);
  const [showImagingModal, setShowImagingModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [modalPatientData, setModalPatientData] = useState(null)

  const fetchData = async (newpage) => {
    try {
      const data = await PatientService.getPatients(newpage);
      setPageData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }
  
  const handlePageChange = async (page) => {
    setPage(page);
  };

  interface Patient {
    lastAppointment: number;
    phone: string;
    firstName: string;
    lastName: string;
    patientId: string;
    gender: string;
    address: {
      dob: string;
    };

    id: string;
    dateOfBirth: string;
    phoneNumber: string;
    lastAppointmentDate: string;
  }

  const columns = [
    {
      name: "Patient Name",
      selector: (row: Patient) => `${row.firstName} ${row.lastName}`,
      sortable: true,
      width: "300px",
    },
    {
      name: "Patient ID",
      selector: (row: Patient) => row.patientId,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row: Patient) => row.gender,
    },
    {
      name: "Date of Birth",
      selector: (row: Patient) => formatDate(row.address?.dob),
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row: Patient) => row.phone,
      sortable: true,
    },
    {
      name: "Last Appointment",
      selector: (row: Patient) => formatDate(row.lastAppointment),
      sortable: true,
      width: "200px",
    },
    {
      cell: (data) => (
        <div className=" w-full flex justify-end items-center">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item
                onClick={() => {
                  setShowLabModal(true);
                }}
              >
                Order Laboratory
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setShowImagingModal(true);
                  setModalPatientData(data)
                }}
              >
                Order Radiology
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setShowDoctorModal(true);
                }}
              >
                See a Doctor
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  const handleRowClick = (id: string) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div className="rounded-[.5rem] px-10 py-4 bg-white shadow">
      <DataTable
        columns={columns}
        data={
          patientData?.data ? patientData.data : pageData?.data?.patients || []
        }
        onRowClicked={(row) => handleRowClick(row.id)}
        pagination
        onChangePage={handlePageChange}
      />
      {/* lab modal */}
      <BasicModal
        title="Order Laboratory Tests"
        setOpenModal={setShowLabModal}
        cancelTitle="Cancel Order"
        openModal={showLabModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        showSubmitButton={true}
      >
        <NewLabOrder
          setSelectedScheme={setSelectedScheme}
          setselectLabPanel={setselectLabPanel}
          setFormComment={setFormComment}
          selectLabPanel={selectLabPanel}
          selectScheme={selectScheme}
          formComment={formComment}
          patientData={modalPatientData}
        />
      </BasicModal>

      {/* Imaging modal */}
      <BasicModal
        title="Order Radiology Tests"
        setOpenModal={setShowImagingModal}
        cancelTitle="Cancel Order"
        openModal={showImagingModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        showSubmitButton={true}
      >
        <OrderRadiology />
      </BasicModal>

      {/* Doctor encounter modal */}
      <BasicModal
        title="See A Doctor"
        setOpenModal={setShowDoctorModal}
        cancelTitle="Cancel Order"
        openModal={showDoctorModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        showSubmitButton={true}
      >
        <OrderDoctor />
      </BasicModal>
    </div>
  );
}

export default PatientTable;
