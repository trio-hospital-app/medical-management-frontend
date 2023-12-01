import React, { forwardRef, useImperativeHandle, useState } from "react";
import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import TextareaAutosize from "react-textarea-autosize";
import CustomMultiSelect from "../../../../components/ui/inputSelect/inputSelect";

const multiSelectOptions = [
  { label: "Immediate", value: "Immediate" },
  { label: "Scheduled", value: "Scheduled" },
];
const multiSelectDatas = [
  { label: "Immediate", value: "Immediate" },
  { label: "Scheduled", value: "Scheduled" },
  { label: "Drugs", value: "Drugs" },
  { label: "Bed", value: "Bed" },
];

const AddTask = forwardRef((props, ref) => {
  const [tasks, setTasks] = useState([
    {
      selectedTaskType: "",
      startDateTime: { date: "", time: "" },
      noteData: "",
      dispositionData: "",
      nursingService: [],
    },
  ]);

  const handleApiCall = () => {
    tasks.forEach((task, index) => {
      console.log(`Task ${index + 1}:`, task);
    });
    // Your logic for handleApiCall in AddTask
  };

  useImperativeHandle(ref, () => ({
    handleApiCall,
  }));

  const handleTaskTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { value } = event.target;
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, selectedTaskType: value } : task
      )
    );
  };

  const handleNursingService = (selectedItems: any, index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, nursingService: selectedItems } : task
      )
    );
  };

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: string
  ) => {
    const { value } = event.target;
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? {
              ...task,
              startDateTime: {
                ...task.startDateTime,
                [type]: value,
              },
            }
          : task
      )
    );
  };

  const handleNoteChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = event.target;
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, noteData: value } : task
      )
    );
  };

  const handleDispositionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = event.target;
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, dispositionData: value } : task
      )
    );
  };

  const addTask = () => {
    const newTask = {
      selectedTaskType: "",
      startDateTime: { date: "", time: "" },
      noteData: "",
      dispositionData: "",
      nursingService: [],
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <>
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

      <div className="px-10 py-5 bg-white shadow border flex items-start justify-start gap-5 flex-col">
        <div className="flex items-start justify-center flex-col">
          <span className="text-sm font-semibold text-gray-500">
            Instruction
          </span>
          <span className="font-semibold capitalize">
            give the patient injection
          </span>
        </div>
      </div>

      {/* add task button  */}
      <div className="flex items-center justify-start w-full ">
        <button
          className="bg-blue-700 text-white px-5 py-2 rounded-[1rem] hover:bg-blue-600"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      {tasks?.map((task, index) => (
        <div key={index} className="border border-black px-5 pt-1">
          <div className="flex w-full items-center flex-col md:flex-row gap-5 justify-between">
            <div className="w-[20rem] py-2">
              <label htmlFor="typePicker">Select Type</label>
              <select
                id="typePicker"
                value={task.selectedTaskType}
                onChange={(e) => handleTaskTypeChange(e, index)}
                className="w-full"
              >
                <option value="" disabled>
                  Select Task Type
                </option>
                {multiSelectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[20rem]">
              <label htmlFor="datePicker">Select Date:</label>
              <input
                type="date"
                id="datePicker"
                value={task.startDateTime.date}
                onChange={(e) => handleDateChange(e, index, "date")}
                className="w-full"
              />
            </div>
            <div className="w-[20rem]">
              <label htmlFor="timePicker">Select Time:</label>
              <input
                type="time"
                id="timePicker"
                value={task.startDateTime.time}
                onChange={(e) => handleDateChange(e, index, "time")}
                className="w-full"
              />
            </div>
          </div>
          {task.selectedTaskType === "Immediate" ? (
            <div>
              <div>
                <span className="text-sm font-semibold text-gray-500">
                  Note
                </span>
                <TextareaAutosize
                  minRows={1}
                  placeholder="Write a Note"
                  onChange={(e) => handleNoteChange(e, index)}
                  className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
                  value={task.noteData}
                  maxRows={5}
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-500">
                  Disposition
                </span>
                <TextareaAutosize
                  minRows={1}
                  placeholder="Write a Disposition"
                  onChange={(e) => handleDispositionChange(e, index)}
                  className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
                  value={task.dispositionData}
                  maxRows={5}
                />
              </div>
              <div className="w-full">
                <div className=" block">
                  <label htmlFor="patientid">Service Center</label>
                </div>
                <CustomMultiSelect
                  options={multiSelectDatas}
                  labelledBy="Select Service Center"
                  onSelectChange={(selectedItems) =>
                    handleNursingService(selectedItems, index)
                  }
                  value={task.nursingService}
                  isMultiSelect={true}
                  placeholder="Select Service Center"
                />
              </div>
            </div>
          ) : (
            <div>
              <span className="text-sm font-semibold text-gray-500">Note</span>
              <TextareaAutosize
                minRows={1}
                placeholder="Write a Note"
                onChange={(e) => handleNoteChange(e, index)}
                className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
                value={task.noteData}
                maxRows={5}
              />
            </div>
          )}
          <div className="flex items-center justify-end w-full py-5 ">
            <button
              className="bg-red-700 text-white px-5 py-2 rounded-[1rem] hover:bg-red-600"
              onClick={() => removeTask(index)}
            >
              Remove Task
            </button>
          </div>
        </div>
      ))}
    </>
  );
});

export default AddTask;
