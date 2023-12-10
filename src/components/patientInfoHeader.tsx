import { Avatar, Dropdown } from "flowbite-react";
import BasicModal from "./ui/modals/basicModal";
import PatientDetails from "../pages/patients/components/patientdetails";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PatientInfoHeader({ patientData }) {
  const [showDetails, setshowDetails] = useState(false);
  return (
    <div className="bg-white px-10 py-4 rounded-[.5rem] shadow mb-5">
      <div className="flex md:flex-row flex-col md:items-center justify-between border-b">
        <div className="flex items-start justify-center flex-col">
          <span className="md:text-xl font-bold text-bold capitalize">
            {patientData?.salutation}. {patientData?.firstName}{" "}
            {patientData?.lastName}
          </span>
          <span className="text-ha-primary1">{patientData?.patientId}</span>
        </div>
        {/* <div>
          <Dropdown inline label={"Actions"}>
            <Dropdown.Item onClick={() => setshowDetails(true)}>
              View Patient Details
            </Dropdown.Item>
            <Dropdown.Item>Book Appointment</Dropdown.Item>
            <Dropdown.Item>Make Deposit</Dropdown.Item>
            <Dropdown.Item onClick={() => "new function"}>Edit</Dropdown.Item>
            <Dropdown.Item>Change Image</Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
          </Dropdown>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row  md:items-start justify-between mt-5">
        <div>
          <Avatar
            alt="User settings"
            img="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            rounded
            bordered
            size="xl"
          />
        </div>
        <div className="flex items-start justify-center gap-2 flex-col ">
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">Gender:</span>
            <span className="font-semibold capitalize">
              {patientData?.gender}
            </span>
          </div>
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Phone Number:
            </span>
            <span className="font-semibold">{patientData?.phone}</span>
          </div>
        </div>

        <div className="flex items-start justify-center gap-2 flex-col ">
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Religion:
            </span>
            <span className="font-semibold capitalize">
              {patientData?.address?.religion}
            </span>
          </div>
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Nationality:
            </span>
            <span className="font-semibold capitalize">
              {patientData?.address?.country}
            </span>
          </div>
        </div>

        <div className="flex items-start justify-center gap-2 flex-col border-r pr-10">
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Marital Status:
            </span>
            <span className="font-semibold capitalize">
              {patientData?.address?.maritalStatus}
            </span>
          </div>
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Date of birth:
            </span>
            <span className="font-semibold">23-04-1990</span>
          </div>
        </div>

        <div className="flex items-start justify-center gap-2 flex-col">
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Payment Schemes:
            </span>
            <span className="text-ha-primary1 underline">
              {" "}
              <Dropdown inline arrowIcon={false} label={"View Schemes"}>
                <Dropdown.Item>NHIS</Dropdown.Item>
                <Dropdown.Item>Avocado</Dropdown.Item>
              </Dropdown>
            </span>
          </div>
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Date of Next Appointment:
            </span>
            <span className="font-semibold">23-04-1990, 9am</span> (Cardiology)
          </div>
        </div>
      </div>

      <BasicModal
        title="Patient Information"
        setOpenModal={setshowDetails}
        openModal={showDetails}
        size="4xl"
      >
        <PatientDetails data={patientData} />
      </BasicModal>
    </div>
  );
}

export default PatientInfoHeader;
