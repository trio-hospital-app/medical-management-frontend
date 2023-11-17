import FilterHeader from "../../components/ui/filterheaders/filterHeader";

function Patients() {
  return (
    <div className="Patients">
      <FilterHeader
        title="Patient Records"
        buttonTitle="Create New Patient"
        resetFilter={() => "hello"}
        search={() => "i am a function"}
      >
        <form className="flex flex-wrap gap-2">
          <div className="w-[24%]">
            <div className=" block">
              <label htmlFor="patientid">Patient ID</label>
            </div>
            <input id="patientid" className="w-full" required />
          </div>
          <div className="w-[24%]">
            <div className=" block">
              <label htmlFor="firstName">First Name</label>
            </div>
            <input id="firstName" className="w-full" required />
          </div>
          <div className="w-[24%]">
            <div className="block">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input id="lastName" required className="w-full" />
          </div>
          <div className="w-[24%]">
            <div className="block">
              <label htmlFor="dob">Date Of Birth</label>
            </div>
            <input type="date" id="dob" name="dob" className="w-full" />
          </div>
          <div className="w-[24%]">
            <div className="block">
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <input id="phoneNumber" className="w-full" type="number" required />
          </div>
          <div className="w-[24%]">
            <div className=" block">
              <label htmlFor="gender">Gender</label>
            </div>
            <select name="gender" id="gender" className="w-full">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </form>
      </FilterHeader>
    </div>
  );
}

export default Patients;
