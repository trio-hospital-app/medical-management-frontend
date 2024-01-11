import { useState } from "react";
// import { toast } from "react-toastify";
import { Button } from "../../../../components/ui/button";

function NextOfKin({ setPresentTab, setPatient, patient }) {
  const [nextOfKinData, setNextOfKinData] = useState({
    name: "",
    relationship: "",
    // phoneCode: "",
    phoneNumber: "",
    postalCode: "",
    address: "",
    state: "",
    city: "",
    lga: "",
  });

  const handleNext = () => {
    // Validate the form fields
    // const requiredFields = Object.keys(nextOfKinData);

    // const missingFields = requiredFields.filter(
    //   (field) =>
    //     nextOfKinData[field] === undefined || nextOfKinData[field] === ""
    // );

    // if (missingFields.length > 0) {
    //   const friendlyFieldNames = missingFields.map((field) =>
    //     field.replace("nok.", "")
    //   );

    //   toast.error(
    //     `Please fill in the following required fields: ${friendlyFieldNames.join(
    //       ", "
    //     )}`
    //   );
    //   return;
    // }

    // Update the patient state with the NextOfKin data
    setPatient((prevPatient) => ({
      ...prevPatient,
      address: {
        ...prevPatient.address,
        nok: nextOfKinData,
      },
    }));

    setPresentTab(3);
  };

  const handleChange = (fieldName, value) => {
    // Update the NextOfKin data state with the new value
    setNextOfKinData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPresentTab(1);
  };

  return (
    <div className="grid w-full p-10 gap-3">
      <div className="grid grid-cols-3 gap-3">
        <div className="">
          <div className="block">
            <label>Name Of Kin</label>
          </div>
          <input
            className="w-full"
            required
            value={nextOfKinData.name || patient?.address?.nok?.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        <div className="">
          <div className="block">
            <label>Relationship</label>
          </div>
          <input
            className="w-full"
            required
            value={
              nextOfKinData.relationship || patient?.address?.nok?.relationship
            }
            onChange={(e) => handleChange("relationship", e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          {/* <div className="w-[20%]">
            <div className="block">
              <label>Code</label>
            </div>
            <select
              name="phoneCode"
              id="phoneCode"
              className="w-full"
              value={
                nextOfKinData.phoneCode || patient?.address?.nok?.phoneCode
              }
              onChange={(e) => handleChange("phoneCode", e.target.value)}
            >
              <option value=""></option>
              <option value="+234">+234</option>
            </select>
          </div> */}

          <div className="w-[100%]">
            <div className="block">
              <label>Phone Number</label>
            </div>
            <input
              className="w-full"
              required
              type="number"
              value={
                nextOfKinData.phoneNumber || patient?.address?.nok?.phoneNumber
              }
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </div>
        </div>

        <div className="">
          <div className="block">
            <label>Postal Code</label>
          </div>
          <input
            className="w-full"
            required
            type="number"
            value={
              nextOfKinData.postalCode || patient?.address?.nok?.postalCode
            }
            onChange={(e) => handleChange("postalCode", e.target.value)}
          />
        </div>

        <div className="">
          <div className="block">
            <label>Address</label>
          </div>
          <textarea
            className="w-full border-2 rounded-lg h-11"
            required
            value={nextOfKinData.address || patient?.address?.nok?.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <div className="">
          <div className="block">
            <label>State</label>
          </div>
          <input
            className="w-full"
            type="text"
            required
            value={nextOfKinData.state || patient?.address?.nok?.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
        </div>

        <div className="">
          <div className="block">
            <label>City</label>
          </div>
          <input
            className="w-full"
            required
            type="text"
            value={nextOfKinData.city || patient?.address?.nok?.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

        <div className="">
          <div className="block">
            <label>LGA</label>
          </div>
          <input
            className="w-full"
            required
            type="text"
            value={nextOfKinData.lga || patient?.address?.nok?.lga}
            onChange={(e) => handleChange("lga", e.target.value)}
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

export default NextOfKin;
