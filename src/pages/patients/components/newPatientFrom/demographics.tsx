import { Button } from "../../../../components/ui/button";

function Demographics({ setPresentTab }) {
  const handleNext = () => {
    setPresentTab(2);
  };
  return (
    <div className="grid w-full p-10 gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <div className=" block">
            <label>Address</label>
          </div>
          <textarea className="w-full border-2 rounded-lg h-11" required />
        </div>
        <div className="">
          <div className=" block">
            <label>City</label>
          </div>
          <input className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Postal Code</label>
          </div>
          <input className="w-full" type="number" />
        </div>
        <div className="">
          <div className=" block">
            <label>Country</label>
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
            <label>State</label>
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
            <label>Occupation</label>
          </div>
          <input className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Religion</label>
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
            <label>LGA</label>
          </div>
          <select name="gender" id="gender" className="w-full">
            <option value="walk-in"></option>
            <option value="walk-in">Single</option>
            <option value="walk-in">Married</option>
            <option value="appointment">Divorced</option>
            <option value="appointment">Widowed</option>
          </select>
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

export default Demographics;
