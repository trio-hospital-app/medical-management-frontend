import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"; // Import icons for adding and removing rows
import CustomDropdown from "../../../../components/ui/CustomDropdown";

interface FormData {
  consultationId: string;
  text: string;
  medication: {
    medicationId: string;
    quantity: any; // Define quantity as number
    duration: string;
  }[];
  unavailable: {
    drug: string;
    quantity: any; // Define quantity as number
    duration: string;
  }[];
}
function NewTreatment({
  formData,
  setFormData,
  medicationOptions,
}: {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  medicationOptions: any;
}) {
  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    const updatedData = { ...formData };
    // Parse the quantity value as an integer
    const quantityValue = name === "quantity" ? parseInt(value) || "" : value;

    if (type === "medication") {
      updatedData.medication[index][name] = quantityValue;
    } else {
      updatedData.unavailable[index][name] = quantityValue;
    }
    setFormData(updatedData);
  };

  const handleAddRow = (type) => {
    const updatedData = { ...formData };
    if (type === "medication") {
      updatedData.medication.push({
        medicationId: "",
        quantity: "",
        duration: "",
      });
    } else {
      updatedData.unavailable.push({ drug: "", quantity: "", duration: "" });
    }
    setFormData(updatedData);
  };

  const handleRemoveRow = (index, type) => {
    const updatedData = { ...formData };
    if (type === "medication") {
      updatedData.medication.splice(index, 1);
    } else {
      updatedData.unavailable.splice(index, 1);
    }
    setFormData(updatedData);
  };

  return (
    <form className="m-3 relative">
      <div className="mb-4 grid gap-3 w-full">
        <label className="block font-bold text-lg text-gray-700">Drug:</label>
        {formData.medication.map((med, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-ha-primary2 h-[80px] rounded-lg px-4"
          >
            {/* <input type="text" name="medicationId" value={med.medicationId} onChange={(e) => handleInputChange(e, index, 'medication')} placeholder="Medication ID" className="p-2 rounded-md border-gray-300" /> */}
            <CustomDropdown
              options={medicationOptions?.data}
              value={
                medicationOptions &&
                medicationOptions?.data?.find(
                  (option) => option.id === med.medicationId,
                )
              }
              onChange={(selectedOption) => {
                handleInputChange(
                  {
                    target: { name: "medicationId", value: selectedOption.id },
                  },
                  index,
                  "medication",
                );
              }}
              placeholder="Select Drug"
            />
            <input
              type="number"
              name="quantity"
              value={med.quantity}
              onChange={(e) => handleInputChange(e, index, "medication")}
              placeholder="Quantity"
              className="p-2 rounded-md border-gray-300"
            />
            <input
              type="text"
              name="duration"
              value={med.duration}
              onChange={(e) => handleInputChange(e, index, "medication")}
              placeholder="Duration e.g 2 days"
              className="p-2 rounded-md border-gray-300"
            />
            <button
              type="button"
              onClick={() => handleRemoveRow(index, "medication")}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaMinusCircle />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddRow("medication")}
          className="mt-2 w-[20%] flex items-center justify-center gap-1 text-ha-primary1 underline"
        >
          <FaPlusCircle /> Add Medication
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="text" className="block font-bold text-lg text-gray-700">
          Comment:
        </label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          rows={3}
          onChange={(e) => handleInputChange(e, null, "text")}
          className="mt-1 p-2 block w-full rounded-md border border-gray-300"
        />
      </div>
      <div className="mb-4 grid gap-3 w-full">
        <label className="block font-bold text-lg text-gray-700">
          Unavailable Drugs
        </label>
        {formData.unavailable.map((drug, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-ha-primary2 h-[80px] rounded-lg px-4"
          >
            <input
              type="text"
              name="drug"
              value={drug.drug}
              onChange={(e) => handleInputChange(e, index, "outOfStockDrugs")}
              placeholder="Drug"
              className="p-2 rounded-md border-gray-300"
            />
            <input
              type="number"
              name="quantity"
              value={drug.quantity}
              onChange={(e) => handleInputChange(e, index, "outOfStockDrugs")}
              placeholder="Quantity"
              className="p-2 rounded-md border-gray-300"
            />
            <input
              type="text"
              name="duration"
              value={drug.duration}
              onChange={(e) => handleInputChange(e, index, "outOfStockDrugs")}
              placeholder="Duration"
              className="p-2 rounded-md border-gray-300"
            />
            <button
              type="button"
              onClick={() => handleRemoveRow(index, "outOfStockDrugs")}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaMinusCircle />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddRow("outOfStockDrugs")}
          className="mt-2 w-[25%] flex items-center justify-center gap-1 text-ha-primary1 underline"
        >
          <FaPlusCircle /> Add Out of Stock Drug
        </button>
      </div>
    </form>
  );
}

export default NewTreatment;
