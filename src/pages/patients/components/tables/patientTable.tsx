import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";
import OrderDoctor from "../orderDoctor";
import { formatDate } from "../../../../hooks/formattedDate";
// import PatientService from "../../../../services/patientService";
import Loader from "../../../../components/ui/loader";
import NewLabOrder from "./newLabOrder";
import { useAddLab } from "../../../../hooks/reactQuery/useLabs";
import { toast } from "react-toastify";
import { useAddRadiology } from "../../../../hooks/reactQuery/useRadiology";
import NewImagingOrder from "./NewImagingOrder";
import { useNewConsultation } from "../../../../hooks/reactQuery/useVisit";
import { useGetUserByToken } from "../../../../hooks/reactQuery/useUser";

function PatientTable({ patientData }) {
  const navigate = useNavigate();
  const [formComment, setFormComment] = useState("");
  const [selectLabPanel, setselectLabPanel] = useState([]);
  const [selectScheme, setSelectedScheme] = useState([]);
  // const [pageData, setPageData] = useState<PageData>(null);
  const [showLabModal, setShowLabModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [newRadiologyModal, setNewRadiologyModal] = useState(false);
  // const [page, setPage] = useState(1);
  const [modalPatientData, setModalPatientData] = useState(null);
  const [diagnosisComment, setDiagnosisComment] = useState("");
  const [selectRadiologyTest, setSelectRadiologyTest] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [scheme, setScheme] = useState("");
  const [dept, setDept] = useState("");

  console.log(doctorId);

  const {
    mutate: mutateLab,
    status: addLabStatus,
    isLoading: NewLabLoading,
  } = useAddLab();

  const {
    data: consultationData,
    isLoading: loadingConsults,
    mutate: createMutate,
  } = useNewConsultation();
  const { data: userData } = useGetUserByToken();
  if (consultationData && consultationData?.status) {
    toast.success("Successfully Created Consultation");
    createMutate(null);
  }
  const {
    mutate: mutateRAdiology,
    status: addRadiologyStatus,
    isLoading: NewRadiologyLoading,
  } = useAddRadiology();

  if (addLabStatus === "success") {
    toast.success("Lab order created successfully");
    mutateLab(null);
  }
  if (addRadiologyStatus === "success") {
    toast.success("Radiology order created successfully");
    mutateRAdiology(null);
  }
  // const fetchData = async (newpage) => {
  //   try {
  //     const data = await PatientService.getPatients(newpage);
  //     setPageData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(page);
  // }, [page]);

  if (NewLabLoading || NewRadiologyLoading || loadingConsults) {
    return <Loader />;
  }

  // const handlePageChange = async (page) => {
  //   setPage(page);
  // };

  const handleCreateNewLabOrder = async () => {
    const LabData: any = {
      panelArr: selectLabPanel,
      patientId: modalPatientData?.id,
      text: formComment,
      schemeId: selectScheme,
    };
    await mutateLab(LabData);
    setShowLabModal(false);
  };

  const handleCreateNewRadiologyOrder = async () => {
    const RadiologyData: any = {
      testArr: selectRadiologyTest,
      patientId: modalPatientData?.id,
      text: formComment,
      diagnosis: diagnosisComment,
      schemeId: selectScheme,
    };
    await mutateRAdiology(RadiologyData);
    setNewRadiologyModal(false);
  };

  const createConsultation = async () => {
    try {
      const data = {
        doctorId: userData?.data?.id,
        visit: dept,
        patientId: modalPatientData?.id,
        schemeId: scheme,
      };
      await createMutate(data);
    } catch (error) {}
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
      selector: (row: Patient) => `${row?.firstName} ${row?.lastName}`,
      sortable: true,
      width: "350px",
    },
    {
      name: "Patient ID",
      selector: (row: Patient) => row?.patientId,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row: Patient) => row.gender,
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
      name: "Actions",
      cell: (row) => (
        <div className=" w-full flex justify-start items-center">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item
                onClick={() => {
                  setShowLabModal(true);
                  setModalPatientData(row);
                }}
              >
                Order Laboratory
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setNewRadiologyModal(true);
                  setModalPatientData(row);
                }}
              >
                Order Radiology
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setShowDoctorModal(true);
                  setModalPatientData(row);
                }}
              >
                Consultation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setShowDoctorModal(true);
                  setModalPatientData(row);
                }}
              >
                Take Vitals
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
        columns={columns as any}
        data={
          // patientData?.data ? patientData.data : pageData?.data?.patients || []
          patientData?.data
        }
        onRowClicked={(row: { id: any }) =>
          handleRowClick((row as { id: any }).id)
        }

        // pagination
        // onChangePage={handlePageChange}
      />
      {/* lab modal */}
      <BasicModal
        size="3xl"
        title="Order Laboratory Tests"
        setOpenModal={setShowLabModal}
        cancelTitle="Cancel Order"
        openModal={showLabModal}
        showCancelButton={true}
        submitTitle="Submit Order"
        submitHandler={handleCreateNewLabOrder}
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
        title="New Imaging Order"
        setOpenModal={setNewRadiologyModal}
        openModal={newRadiologyModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="3xl"
        submitHandler={handleCreateNewRadiologyOrder}
      >
        <NewImagingOrder
          setSelectedScheme={setSelectedScheme}
          setSelectRadiologyTest={setSelectRadiologyTest}
          setFormComment={setFormComment}
          patientData={modalPatientData}
          formComment={formComment}
          selectRadiologyTest={selectRadiologyTest}
          selectScheme={selectScheme}
          setDiagnosisComment={setDiagnosisComment}
          diagnosisComment={diagnosisComment}
        />
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
        size="3xl"
        submitHandler={() => {
          createConsultation();
        }}
      >
        <OrderDoctor
          setDoctorId={setDoctorId}
          setScheme={setScheme}
          setDept={setDept}
          patientData={modalPatientData}
        />
      </BasicModal>
    </div>
  );
}

export default PatientTable;
