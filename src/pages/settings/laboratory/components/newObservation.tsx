import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import the icons you want to use

function NewObservation() {
  const [referenceRangeInputs, setReferenceRangeInputs] = useState([0]);

  const addInput = () => {
    setReferenceRangeInputs([...referenceRangeInputs, referenceRangeInputs.length]);
  };

  const removeInput = () => {
    if (referenceRangeInputs.length > 1) {
      const newInputs = [...referenceRangeInputs];
      newInputs.pop();
      setReferenceRangeInputs(newInputs);
    }
  };
  return (
    <div className="p-2 grid gap-2">
    <div className="grid">
      <label>Name Of Observation e.g (Malaria Parasite)</label>
      <input type="text" />
    </div>
    <div className="grid">
      <label>Observation Value e.g (Haematology)</label>
      <select name="" id="">
        <option value="">Text</option>
        <option value="">Decimal</option>
        <option value="">Number</option>
      </select>
    </div>
    <div className="grid">
      <label>Unit of measurement e.g (mmol/l)</label>
      <input type="text" />
    </div>
    <div className="grid">
        <label>Reference Range</label>
        {referenceRangeInputs.map((index) => (
          <input key={index} type="number" />
        ))}
        <div className="flex space-x-2">
          <button onClick={addInput} className="bg-green-500 text-white p-2">
            <FaPlus />
          </button>
          <button onClick={removeInput} className="bg-red-500 text-white p-2">
            <FaMinus />
          </button>
        </div>
      </div>
  </div>
  )
}

export default NewObservation