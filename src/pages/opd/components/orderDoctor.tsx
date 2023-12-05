import { useState } from "react";
import CustomLabHeader from "../../../components/ui/customPatientCard/customPatientCard";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];
function OrderDoctor() {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <div>
        <CustomLabHeader
          patientName="Mr. christopher Abraham"
          patientID="12345667778"
          testName="Full Blood Count"
          labID="12345667778"
          imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          gender="Male"
          phoneNumber="12345667778"
          religion="Christian"
          nationality="Nigeria"
          maritalStatus="Single"
          age="32 years"
          orderedBy="Dr. Alexander Ifeanyichukwu"
          orderedDate="23-04-2023 (9:10 am UTC)"
          testNameBackgroundColor="bg-green-700"
        />
      </div>
      <form className="p-10 grid gap-2">
        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Clinic</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Lab Test"
          />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Type of Visit</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Lab Test"
          />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Health Scheme</label>
          </div>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Lab Test"
          />
        </div>
      </form>
    </div>
  );
}

export default OrderDoctor;
