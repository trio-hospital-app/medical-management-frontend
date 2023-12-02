import DataTable from "react-data-table-component";
import { Dropdown } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";
import OrderLab from "../orderLab";
import OrderRadiology from "../orderRadiology";
import OrderDoctor from "../orderDoctor";
import { useGetPatients } from "../../../../hooks/reactQuery/usePatients";
import Loader from "../../../../components/ui/loader";

function PatientTable() {
  const navigate = useNavigate();
  const [showLabModal, setShowLabModal] = useState(false);
  const [showImagingModal, setShowImagingModal] = useState(false);
  const [showDoctorModal, setShowDoctorModal] = useState(false);

  const {data:patientsData, isLoading} = useGetPatients()

  console.log(patientsData, 'patientsData')

  if (isLoading) {
    return <Loader />;
  }

  interface Patient {
    lastAppointment: number;
    phone: string,
    firstName: string;
    lastName: string;
    patientId: string;
    gender: string;
    address: {
      dob: string
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
      with: "200px",
    },
    {
      name: "Patient ID",
      selector: (row: Patient) => row.patientId,
      sortable: true,
      with: "200px",
    },
    {
      name: "Gender",
      selector: (row: Patient) => row.gender,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row: Patient) => row.address?.dob,
      sortable: true,
      with: "200px",
    },
    {
      name: "Phone Number",
      selector: (row: Patient) => row.phone,
      sortable: true,
      with: "200px",
    },
    {
      name: "Date of Last Appointment",
      selector: (row: Patient) => row.lastAppointment,
      sortable: true,
      with: "500px",
    },
    {
      cell: () => (
        <div className=" w-full flex justify-end items-center">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown arrowIcon={false} inline label={<BsThreeDotsVertical  style={{color: "black"}}/>}>
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
        data={patientsData?.data.patients}
        onRowClicked={(row) => handleRowClick(row.id)}
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
        <OrderLab />
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
