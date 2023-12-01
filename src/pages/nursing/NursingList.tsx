import { useNavigate } from "react-router-dom";
import CustomPatientCard from "../../components/ui/customPatientCard/customPatientCard";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TaskTable from "./components/taskTable";
import MainSearchInput from "../../components/ui/mainSearchInput";
import { useState } from "react";
import { Button } from "../../components/ui/button";

const NursingList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const goBackHandler = () => {
    console.log("go back");
    navigate(-1);
  };

  const addTaskHandler = () => {
    console.log("add task");
  };
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(search);
    }
  };

  return (
    <>
      <div>
        <div
          className="ml-5 flex items-center justify-start gap-1 w-[10%] my-5 cursor-pointer"
          onClick={goBackHandler}
        >
          <div className="w-[2rem]">
            <KeyboardBackspaceIcon />
          </div>
          <span>Back</span>
        </div>

        <div>
          <CustomPatientCard
            patientName="Mr. Christopher Abraham"
            patientID="12345667778"
            patientEmail="Christopherabraham8@gmail.com"
            imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            gender="Male"
            phoneNumber="12345667778"
            religion="Christian"
            nationality="Nigeria"
            maritalStatus="Single"
            age="32 years"
            layout={2}
          />
        </div>
        <div className="px-10 py-5 bg-white shadow flex items-start justify-start gap-5 flex-col">
          <div className="flex items-start justify-center flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Instruction
            </span>
            <span className="font-semibold capitalize">
              give the patient injection
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex items-start justify-center flex-col">
              <span className="text-sm font-semibold text-gray-500">
                Orderd By:
              </span>
              <span className="font-semibold">Dr. John Musa Ojo</span>
            </div>
            <div className="flex items-start justify-center flex-col">
              <span className="text-sm font-semibold text-gray-500">
                Orderd Date:
              </span>
              <span className="font-semibold">2023-11-17</span>
            </div>
          </div>
        </div>
        <div className="py-5 my-5 bg-white shadow">
          
          {/* tsk table  */}
          <TaskTable />
        </div>
      </div>
    </>
  );
};

export default NursingList;
