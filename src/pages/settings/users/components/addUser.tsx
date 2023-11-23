import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

function AddUser() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="p-5">
      <form className="grid gap-2">
        <div className="">
          <div className=" block">
            <label>First Name</label>
          </div>
          <input id="patientid" className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Last Name</label>
          </div>
          <input id="patientid" className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Username</label>
          </div>
          <input id="patientid" className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label>Email</label>
          </div>
          <input id="patientid" className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label htmlFor="gender">Module Access</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
