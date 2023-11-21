import { useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import BasicModal from "../../../components/ui/modals/basicModal";
import OrderDoctor from "./orderDoctor";

function Patients() {
  const [showDoctorModal, setShowDoctorModal] = useState(false);

  return (
    <div className="Patients">
      <FilterHeader
        title="All Doctor's Visit"
        buttonTitle="New Doctor's Visit"
        resetFilter={() => "hello"}
        search={() => "i am a function"}
        handleCreate={() => {
          setShowDoctorModal(true);
        }}
      >
        <form className="grid md:grid-cols-4 flex-wrap gap-2">
          <div className="">
            <div className=" block">
              <label htmlFor="patientid">Patient ID</label>
            </div>
            <input id="patientid" className="w-full" required />
          </div>
          <div className="">
            <div className="block">
              <label htmlFor="dob">Date</label>
            </div>
            <input type="date" id="dob" name="dob" className="w-full" />
          </div>
          <div className="">
            <div className=" block">
              <label htmlFor="gender">Status</label>
            </div>
            <select name="gender" id="gender" className="w-full">
              <option value="seen">Seen</option>
              <option value="not-seen">Not Seen</option>
            </select>
          </div>
          <div className="">
            <div className=" block">
              <label htmlFor="gender">Type of Visit</label>
            </div>
            <select name="gender" id="gender" className="w-full">
              <option value="walk-in">Walk In</option>
              <option value="appointment">Appointment</option>
            </select>
          </div>
          <div className="">
            <div className=" block">
              <label htmlFor="gender">Clinic</label>
            </div>
            <select name="gender" id="gender" className="w-full">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </form>
      </FilterHeader>

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

export default Patients;
