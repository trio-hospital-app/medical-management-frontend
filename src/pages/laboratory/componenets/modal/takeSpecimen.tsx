import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

function TakeSpecimen() {
  const [formData, setFormData] = useState("");

  return (
    <>
      <div>
        <CustomLabHeader
          patientName="Mr. Fredrick Luguard"
          patientID="12345667778"
          testName="Full Blood Count"
          labID="12345667778"
          patientEmail="Christopherabraham8@gmail.com"
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

      <div className="px-4">
        <span className="font-bold">Add Comment</span>
        <TextareaAutosize
          minRows={3}
          placeholder="Write a comment"
          onChange={(e) => setFormData(e.target.value)}
          className={`w-[95%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
          value={formData}
          maxRows={5}
        />
      </div>
    </>
  );
}

export default TakeSpecimen;
