import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

function NewLabTests() {
  const [selected, setSelected] = useState([]);
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
  return (
    <div className="p-2 grid gap-2">
      <div className="grid">
        <label>Name Of Test e.g (Malaria Parasite)</label>
        <input type="text" />
      </div>
      <div className="grid">
        <label>Laboratory Observation</label>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Lab Test"
        />
      </div>
      <div className="grid">
        <label>Laboratory Container e.g (Plain Bottle, EDTA)</label>
        <select name="" id="">
          <option value="">EDTA</option>
          <option value="">Plain Bottle</option>
        </select>
      </div>
      <div className="grid">
        <label>Laboratory Department e.g (Haematology)</label>
        <select name="" id="">
          <option value="">Haematology</option>
          <option value="">Microbiology</option>
        </select>
      </div>
      <div className="grid">
        <label>Billing Price</label>
        <input type="number" />
      </div>
      <div className="grid">
        <label>Cost Price</label>
        <input type="number" />
      </div>
    </div>
  );
}

export default NewLabTests;
