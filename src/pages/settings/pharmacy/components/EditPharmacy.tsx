import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { options } from "./medication-forms";

options.sort((a, b) => (a.label > b.label ? 1 : -1));

function EditPharmacy({ setFormData, formData }) {
  const [selected, setSelected] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  useEffect(() => {
    const formArray = formData.form.split(",").map((form) => form.trim());
    setSelected(
      formArray.map((form) => ({
        label: form.charAt(0).toUpperCase() + form.slice(1).toLowerCase(),
        value: form.toLowerCase(),
      }))
    );
  }, [formData.form]);

  const handleMultiSelectChange = (selectedOptions) => {
    setSelected(selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    const selectedForms = selectedValues.join(", ").replace(/^, /, "");
    setFormData((prevData) => ({ ...prevData, form: selectedForms }));
  };

  return (
    <div className="p-5">
      <form className="grid gap-2">
        <div>
          <div className="block font-bold">
            <label htmlFor="forms">Medication Form</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={handleMultiSelectChange}
            labelledBy="Select"
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Name</label>
          </div>
          <input
            id="name"
            className="w-full capitalize"
            required
            onChange={handleInputChange}
            value={formData.name}
          />
        </div>
        <div>
          <div className="block font-bold">
            <label>Manufacturer</label>
          </div>
          <input
            id="manufacturer"
            className="w-full capitalize"
            required
            onChange={handleInputChange}
            value={formData.manufacturer}
          />
        </div>
        <div className="">
          <div className="block font-bold">
            <label>Description</label>
          </div>
          <input
            id="description"
            className="w-full capitalize"
            required
            onChange={handleInputChange}
            value={formData.description}
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
            value={formData.quantity}
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
            value={formData.price}
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
            value={formData.unit}
          />
        </div>
      </form>
    </div>
  );
}

export default EditPharmacy;
