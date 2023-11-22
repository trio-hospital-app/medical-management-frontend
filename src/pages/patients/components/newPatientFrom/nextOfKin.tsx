import { Button } from "../../../../components/ui/button";

function NextOfKin({ setPresentTab }) {
  const handleNext = () => {
    setPresentTab(3);
  };
  return (
    <div className="grid w-full p-10 gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <div className=" block">
            <label>Name Of Kin</label>
          </div>
          <input className="w-full" required />
        </div>

        <div className="">
          <div className=" block">
            <label>Relationship</label>
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
            <input className="w-full" required type="number" />
          </div>
        </div>

        <div className="">
          <div className=" block">
            <label>Postal Code</label>
          </div>
          <input className="w-full" required type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label>Address</label>
          </div>
          <textarea className="w-full border-2 rounded-lg h-11" required />
        </div>

        <div className="">
          <div className=" block">
            <label>State</label>
          </div>
          <input className="w-full" required />
        </div>

        <div className="">
          <div className=" block">
            <label>City</label>
          </div>
          <input className="w-full" required type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label>LGA</label>
          </div>
          <input className="w-full" required type="number" />
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

export default NextOfKin;
