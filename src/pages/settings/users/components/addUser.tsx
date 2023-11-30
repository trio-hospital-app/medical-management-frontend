import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Doctor", value: "doctor" },
  { label: "Laboratory", value: "laboratory" },
  { label: "Radiology", value: "Radiology" },
  { label: "Patients", value: "Patients" },
  { label: "Pharmacy", value: "Pharmacy" },
  { label: "Nursing", value: "Nursing" },
];

 // @ts-expect-error: Just ignore the next line
function AddUser({ setFormData }) {
  const [selected, setSelected] = useState([]);


  useEffect(() => {
     // @ts-expect-error: Just ignore the next line
    setFormData((prevData) => ({
      ...prevData,
       // @ts-expect-error: Just ignore the next line
      role: selected.map((item) => item?.value),
    }));
  }, [selected, setFormData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
     // @ts-expect-error: Just ignore the next line
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="p-5">
      <form className="grid gap-2">
        <div className="">
          <div className="block">
            <label htmlFor="gender">Module Access</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
        <div className="">
          <div className="block">
            <label>First Name</label>
          </div>
          <input
            id="firstName"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <div className="block">
            <label>Last Name</label>
          </div>
          <input
            id="lastName"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <div className="block">
            <label>Email</label>
          </div>
          <input
            id="email"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
