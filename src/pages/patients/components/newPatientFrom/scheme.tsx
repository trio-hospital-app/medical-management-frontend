import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdSave } from "react-icons/io";

function Scheme() {
  const [schemes, setSchemes] = useState([
    {
      schemeType: "",
      enrolleeId: "",
      relationship: "",
      expirationDate: "",
    },
  ]);

  const handleAddScheme = () => {
    setSchemes([
      ...schemes,
      { schemeType: "", enrolleeId: "", relationship: "", expirationDate: "" },
    ]);
  };

  const handleDeleteScheme = (index) => {
    const updatedSchemes = [...schemes];
    updatedSchemes.splice(index, 1);
    setSchemes(updatedSchemes);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSchemes = [...schemes];
    updatedSchemes[index][field] = value;
    setSchemes(updatedSchemes);
  };

  return (
    <div className="grid">
      <div className=" overflow-y-auto">
        {schemes.map((scheme, index) => (
          <div className="grid md:grid-cols-5 gap-3 items-center mt-5 bg-gray-100 p-2 rounded ">
            <div className="">
              <div className=" block">
                <label>Scheme</label>
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
                <label>Enrollee ID</label>
              </div>
              <input className="w-full" required />
            </div>

            <div className="">
              <div className=" block">
                <label>Relationship with Enrollee</label>
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
                <label>Scheme Expiration Date</label>
              </div>
              <input className="w-full" required type="date" />
            </div>

            <div
              className="flex items-center justify-end gap-2 cursor-pointer"
              onClick={() => handleDeleteScheme(index)}
            >
              <MdDelete className="text-red-500" />
              <span className="text-red-500">delete</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-center gap-2 bg-ha-secondary1 p-2 mt-5 cursor-pointer rounded-md"
          onClick={handleAddScheme}
        >
          <FaPlus style={{ color: "#3f56cd" }} />
          <span className="text-ha-primary1">Add Scheme</span>
        </div>
        <div
          className="flex items-center justify-center gap-2 bg-ha-primary1 py-2 px-5 mt-5 cursor-pointer rounded-md"
          onClick={handleAddScheme}
        >
          <IoMdSave style={{ color: "white" }} />
          <span className="text-white">Save Patient Record</span>
        </div>
      </div>
    </div>
  );
}

export default Scheme;
