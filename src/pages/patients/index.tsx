import FilterHeader from "../../components/ui/filterheaders/filterHeader";

function Patients() {
  return (
    <div className="Patients">
      <FilterHeader title="Patient Records" buttonTitle="Create New Patient" resetFilter={()=>'hello'} search={()=>'i am a function'}>
        <form className="flex flex-wrap gap-2">
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="patientid">Patient ID</label>
            </div>
            <input
              id="patientid"
              className="w-full"
              required
            />
          </div>
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              id="firstName"
              className="w-full"
              required
            />
          </div>
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              id="lastName"
              required
              className="w-full"
            />
          </div>
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="username">Patient ID</label>
            </div>
            <input
              id="username"
              className="w-full"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="username">Patient ID</label>
            </div>
            <input
              id="username"
              className="w-full"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="username">Patient ID</label>
            </div>
            <input
              id="username"
              className="w-full"
              placeholder="name@company.com"
              required
            />
          </div>
        </form>
      </FilterHeader>
    </div>
  );
}

export default Patients;
