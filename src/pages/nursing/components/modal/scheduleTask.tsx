import { forwardRef, useImperativeHandle, useState } from "react";
import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import TextareaAutosize from "react-textarea-autosize";
import CustomMultiSelect from "../../../../components/ui/inputSelect/inputSelect";

const multiSelectDatas = [
  { label: "Immediate", value: "Immediate" },
  { label: "Scheduled", value: "Scheduled" },
  { label: "Drugs", value: "Drugs" },
  { label: "Bed", value: "Bed" },
];
const ScheduleTask = forwardRef((_props, ref) => {
  const [formData, setFormData] = useState("");
  const [selectNursingService, setSelectNursingService] = useState([]);

  const handleSchduleSubmit = () => {
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNursingService = (selectedItems: any) => {
    setSelectNursingService(selectedItems);
  };

  useImperativeHandle(ref, () => ({
    handleSchduleSubmit,
  }));

  return (
    <>
      <div>
        <div>
          <CustomLabHeader
            patientName="Mr. Fredrick Luguard"
            patientID="12345667778"
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
            layout={2}
          />
        </div>
        <div className="px-5 py-5 bg-white shadow border flex items-start justify-start gap-5 flex-col">
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-ha-primary1">
              Instruction
            </span>
            <span className="font-semibold capitalize">
              give the patient injection
            </span>
          </div>
        </div>
        <div>
          <p className="text-lg py-2 px-4 font-extrabold text-ha-primary1">
            Task
          </p>
          <div className="border border-black px-5 py-5 flex flex-col md:flex-col">
            <div className=" flex flex-col md:flex-row items-center justify-between py-2">
              <div>
                <span className="text-sm font-semibold text-gray-500">
                  Created Date:
                </span>
                <span className="text-md font-bold"> 2023-11-30</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-500">
                  Schedule Date:
                </span>
                <span className="text-md font-bold"> 2023-11-30, 00:00</span>
              </div>
            </div>
            <div className="border-b-2 pb-5">
              <span className="text-sm font-semibold text-gray-500">
                Created By:
              </span>
              <span className="text-md font-bold"> Musa Chisom</span>
            </div>
            <div className="py-5">
              <span className="text-sm font-semibold text-ha-primary1">
                Note
              </span>
              <p className="text-md font-bold text-justify">
                The President of the Senate, Godswill Akpabio, declared in Abuja
                on Friday that the ruling
              </p>
            </div>
            <div>
              <span className="text-sm font-semibold text-ha-primary1">
                Desposition
              </span>
              <TextareaAutosize
                minRows={1}
                placeholder="Write a Desposition"
                onChange={(e) => setFormData(e.target.value)}
                className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
                value={formData}
                maxRows={5}
                required
              />
            </div>
            <div className="w-full">
              <div className=" block">
                <label htmlFor="patientid">Nursing Services</label>
              </div>
              <CustomMultiSelect
                options={multiSelectDatas}
                labelledBy="Select Nursing Services"
                onSelectChange={handleNursingService}
                value={selectNursingService}
                isMultiSelect={true}
                placeholder="Select Nursing Services"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ScheduleTask;
