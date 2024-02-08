import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Tablet", value: "tablet" },
  { label: "Capsule", value: "capsule" },
  { label: "Suspension", value: "suspension" },
  { label: "Injection", value: "injection" },
  { label: "Drops", value: "drops" },
  { label: "Inhalers", value: "inhalers" },
  { label: "Liquid", value: "liquid" },
  { label: "Implant", value: "implant" },
  { label: "Ointment", value: "ointment" },
  { label: "Cream", value: "cream" },
  { label: "Suppository", value: "suppository" },
  { label: "Powder", value: "powder" },
  { label: "Lozenge", value: "lozenge" },
  { label: "Syrup", value: "syrup" },
  { label: "Gel", value: "gel" },
  { label: "Patch", value: "patch" },
  { label: "Spray", value: "spray" },
  { label: "Aerosol", value: "aerosol" },
  { label: "Solution", value: "solution" },
  { label: "Lotion", value: "lotion" },
  { label: "Emulsion", value: "emulsion" },
  { label: "Paste", value: "paste" },
  { label: "Foam", value: "foam" },
  { label: "Aerosol foam", value: "aerosol foam" },
  { label: "Gel patch", value: "gel patch" },
  { label: "Effervescent tablet", value: "effervescent tablet" },
  { label: "Chewable tablet", value: "chewable tablet" },
  { label: "Sublingual tablet", value: "sublingual tablet" },
  { label: "Buccal tablet", value: "buccal tablet" },
  { label: "Film", value: "film" },
  { label: "Granules", value: "granules" },
  { label: "Pellets", value: "pellets" },
  { label: "Oil", value: "oil" },
  { label: "Syringe", value: "syringe" },
  { label: "Pessary", value: "pessary" },
  { label: "Ear drops", value: "ear drops" },
  { label: "Eye drops", value: "eye drops" },
  { label: "Nasal spray", value: "nasal spray" },
  { label: "Vaginal cream", value: "vaginal cream" },
  { label: "Vaginal tablet", value: "vaginal tablet" },
  { label: "Vaginal suppository", value: "vaginal suppository" },
  { label: "Vaginal ring", value: "vaginal ring" },
  { label: "Dental paste", value: "dental paste" },
  { label: "Dental gel", value: "dental gel" },
  { label: "Dental solution", value: "dental solution" },
  { label: "Dental strip", value: "dental strip" },
  { label: "Dental varnish", value: "dental varnish" },
  { label: "Dental cream", value: "dental cream" },
  { label: "Dental powder", value: "dental powder" },
  { label: "Dental foam", value: "dental foam" },
];

options.sort((a, b) => (a.label > b.label ? 1 : -1));

function AddPharmacy({ setFormData }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,

      form: selected.map((item) => item?.value),
    }));
  }, [selected, setFormData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="p-5">
      <form className="grid gap-2">
        <div>
          <div className="block font-bold">
            <label htmlFor="gender">Medication Form</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Name</label>
          </div>
          <input
            id="name"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="block font-bold">
            <label>Manufacturer</label>
          </div>
          <input
            id="manufacturer"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Description</label>
          </div>
          <input
            id="description"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Quantity</label>
          </div>
          <input
            id="quantity"
            className="w-full"
            required
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Price (Naira)</label>
          </div>
          <input
            id="price"
            className="w-full"
            required
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Unit</label>
          </div>
          <input
            id="unit"
            className="w-full"
            required
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default AddPharmacy;
