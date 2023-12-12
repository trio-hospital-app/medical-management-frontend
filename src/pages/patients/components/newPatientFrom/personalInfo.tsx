import { toast } from "react-toastify";
import { Button } from "../../../../components/ui/button";

function PersonalInfo({ setPresentTab, patient, setPatient }) {
  const handleNext = (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "salutation",
      "address.maritalStatus",
      "gender",
      "address.email",
      "address.dob",
      "address.identificationType",
      "address.identificationNumber",
      "address.identificationValidity",
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

    setPresentTab(1);
  };

  // Helper function to get nested values from an object
  const getNestedValue = (obj, path) => {
    const keys = path.split(".");
    return keys.reduce((acc, key) => acc?.[key], obj);
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

    console.log(patient);
  };

  return (
    <div className="grid w-full p-10 gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <div className=" block">
            <label>Salutation</label>
          </div>
          <select
            name="salutation"
            id="salutation"
            className="w-full"
            value={patient.salutation}
            onChange={(e) => handleChange("salutation", e.target.value)}
          >
            <option value=""></option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms">Ms</option>
            <option value="dr">Dr</option>
            <option value="prof">Prof</option>
            <option value="eng">Eng</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>First Name</label>
          </div>
          <input
            className="w-full"
            required
            value={patient.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Middle Name</label>
          </div>
          <input
            className="w-full"
            required
            value={patient.middleName}
            onChange={(e) => handleChange("middleName", e.target.value)}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Last Name</label>
          </div>
          <input
            className="w-full"
            required
            value={patient.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Date of Birth</label>
          </div>
          <input
            className="w-full"
            required
            type="date"
            onChange={(e) => handleChange("address", e.target.value, "dob")}
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Gender</label>
          </div>
          <select
            name="gender"
            id="gender"
            className="w-full"
            value={patient.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>Marital Status</label>
          </div>
          <select
            name="maritalStatus"
            id="maritalStatus"
            className="w-full"
            value={patient.address?.maritalStatus || ""}
            onChange={(e) =>
              handleChange("address", e.target.value, "maritalStatus")
            }
          >
            <option value=""></option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>Email</label>
          </div>
          <input
            className="w-full"
            required
            type="email"
            value={patient.address?.email || ""}
            onChange={(e) => handleChange("address", e.target.value, "email")}
          />
        </div>
        <div className="flex gap-2">
          <div className="w-[20%]">
            <div className=" block">
              <label>Code</label>
            </div>
            <select
              name="phoneCode"
              id="phoneCode"
              className="w-full"
              value={patient.address?.phoneCode || ""}
              onChange={(e) =>
                handleChange("address", e.target.value, "phoneCode")
              }
            >
              <option value=""></option>
              <option value="+234">+234</option>
            </select>
          </div>

          <div className="w-[80%]">
            <div className=" block">
              <label>Phone Number</label>
            </div>
            <input
              className="w-full"
              required
              type="number"
              value={patient.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        <div className="">
          <div className=" block">
            <label>Identification Type</label>
          </div>
          <select
            name="identificationType"
            id="identificationType"
            className="w-full"
            value={patient.address?.identificationType || ""}
            onChange={(e) =>
              handleChange("address", e.target.value, "identificationType")
            }
          >
            <option value=""></option>
            <option value="serviceNumber">Service Number</option>
            <option value="driversLicence">Drivers Licence</option>
            <option value="employeeId">Employee Id</option>
            <option value="passportVisa">Passport, Visa Number</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label>Identification Number</label>
          </div>
          <input
            className="w-full"
            required
            type="number"
            value={patient.address?.identificationNumber || ""}
            onChange={(e) =>
              handleChange("address", e.target.value, "identificationNumber")
            }
          />
        </div>
        <div className="">
          <div className=" block">
            <label>Identification Validity</label>
          </div>
          <input
            className="w-full"
            required
            type="date"
            value={patient.address?.identificationValidity || ""}
            onChange={(e) =>
              handleChange("address", e.target.value, "identificationValidity")
            }
          />
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

export default PersonalInfo;
