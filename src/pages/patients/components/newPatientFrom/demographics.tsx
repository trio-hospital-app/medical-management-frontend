import { toast } from "react-toastify";
import { Button } from "../../../../components/ui/button";

function Demographics({ setPresentTab, patient, setPatient }) {
  const handleNext = () => {
    // Validate the form fields if needed
    // For simplicity, I'm assuming all fields are required
    const requiredFields = [
      "address.address",
      "address.city",
      "address.postalCode",
      "address.country",
      "address.state",
      "occupation",
      "address.religion",
      "address.lga",
    ];

    // Identify missing fields
    const missingFields = requiredFields.filter((field) => {
      const fieldValue = getNestedValue(patient, field);

      if (
        fieldValue === undefined ||
        fieldValue === null ||
        fieldValue === ""
      ) {
        return true;
      }

      return false;
    });

    if (missingFields.length > 0) {
      // Handle validation error by showing a more specific error message
      const friendlyFieldNames = missingFields.map((field) =>
        field.replace("address.", ""),
      );
      toast.error(
        `Please fill in the following required fields: ${friendlyFieldNames.join(
          ", ",
        )}`,
      );
      console.log("patient", patient);
      return;
    }

    setPresentTab(2);
  };

  const handleChange = (
    fieldName: string,
    value: string,
    nestedField: string | null = null,
  ) => {
    // Update the patient state with the new value
    setPatient((prevPatient) => {
      if (nestedField) {
        // If a nested field is specified, update it inside the address
        return {
          ...prevPatient,
          address: {
            ...prevPatient.address,
            [nestedField]: value,
          },
        };
      } else {
        // Update the main patient object
        return {
          ...prevPatient,
          [fieldName]: value,
        };
      }
    });
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPresentTab(0);
  };

  // Helper function to get nested values from an object
  const getNestedValue = (obj, path) => {
    const keys = path.split(".");
    return keys.reduce((acc, key) => acc?.[key], obj);
  };
  return (
    <div className="grid w-full p-10 gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <div className=" block">
            <label>Address</label>
          </div>
          <textarea
            className="w-full border-2 rounded-lg h-11"
            value={patient.address?.address || ""}
            onChange={(e) => handleChange("address", e.target.value, "address")}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>City</label>
          </div>
          <input
            className="w-full"
            value={patient.address?.city || ""}
            onChange={(e) => handleChange("address", e.target.value, "city")}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Postal Code</label>
          </div>
          <input
            className="w-full"
            type="number"
            value={patient.address?.postalCode || ""}
            onChange={(e) =>
              handleChange("address", e.target.value, "postalCode")
            }
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Country</label>
          </div>
          <input
            className="w-full"
            type="text"
            value={patient.address?.country || ""}
            onChange={(e) => handleChange("address", e.target.value, "country")}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>State</label>
          </div>
          <input
            className="w-full"
            type="text"
            value={patient.address?.state || ""}
            onChange={(e) => handleChange("address", e.target.value, "state")}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Occupation</label>
          </div>
          <input
            className="w-full"
            value={patient.occupation || ""}
            onChange={(e) => handleChange("occupation", e.target.value)}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Religion</label>
          </div>
          <select
            name="religion"
            id="religion"
            className="w-full"
            value={patient.address?.religion || ""}
            onChange={(e) =>
              handleChange("address", e.target.value, "religion")
            }
          >
            <option value=""></option>
            <option value="christianity">Christianity</option>
            <option value="Islam">Islam</option>
            <option value="traditional">Traditional</option>
            <option value="atheist">Atheist</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>LGA</label>
          </div>
          <input
            className="w-full"
            value={patient.address?.lga || ""}
            onChange={(e) => handleChange("address", e.target.value, "lga")}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          className="hover:bg-blue-400 text-ha-primary1 border border-ha-primary1 w-[100px]"
          onClick={handleBack}
        >
          Back
        </Button>
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
