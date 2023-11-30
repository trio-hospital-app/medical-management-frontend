import { Button } from "../../../../components/ui/button";
 // @ts-expect-error: Just ignore the next line
function PersonalInfo({ setPresentTab }) {
  const handleNext = () => {
    setPresentTab(1);
  };
  return (
    <div className="grid w-full p-10 gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <div className=" block">
            <label>Salutation</label>
          </div>
          <select name="gender" id="gender" className="w-full">
            <option value="walk-in"></option>
            <option value="walk-in">Mr</option>
            <option value="appointment">Mrs</option>
            <option value="appointment">Ms</option>
            <option value="appointment">Dr</option>
            <option value="appointment">Prof</option>
            <option value="appointment">Eng</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>First Name</label>
          </div>
          <input className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Middle Name</label>
          </div>
          <input className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Last Name</label>
          </div>
          <input className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Date of Birth</label>
          </div>
          <input className="w-full" required type="date" />
        </div>
        <div className="">
          <div className=" block">
            <label>Gender</label>
          </div>
          <select name="gender" id="gender" className="w-full">
            <option value="walk-in"></option>
            <option value="walk-in">Male</option>
            <option value="appointment">Female</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>Marital Status</label>
          </div>
          <select name="gender" id="gender" className="w-full">
            <option value="walk-in"></option>
            <option value="walk-in">Single</option>
            <option value="walk-in">Married</option>
            <option value="appointment">Divorced</option>
            <option value="appointment">Widowed</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>Email</label>
          </div>
          <input className="w-full" required />
        </div>
        <div className="flex gap-2">
          <div className="w-[20%]">
            <div className=" block">
              <label>Code</label>
            </div>
            <select name="gender" id="gender" className="w-full">
            <option value="walk-in"></option>
            <option value="+234">+234</option>
          </select>
          </div>

          <div className="w-[80%]">
            <div className=" block">
              <label>Phone Number</label>
            </div>
            <input className="w-full" required type='number'/>
          </div>
        </div>
        <div className="">
          <div className=" block">
            <label>Identification Type</label>
          </div>
          <select name="gender" id="gender" className="w-full">
            <option value="walk-in"></option>
            <option value="walk-in">Service Number</option>
            <option value="walk-in">Drivers Licence</option>
            <option value="appointment">Employee Id</option>
            <option value="appointment">Passport, Visa Number</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>Identification Number</label>
          </div>
          <input className="w-full" required type="number" />
        </div>
        <div className="">
          <div className=" block">
            <label>Identification Validity</label>
          </div>
          <input className="w-full" required type="date" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          className="hover:bg-blue-400 text-white bg-ha-primary1 w-[100px]"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
