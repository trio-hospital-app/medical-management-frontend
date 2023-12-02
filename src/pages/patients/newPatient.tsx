import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import PersonalInfo from "./components/newPatientFrom/personalInfo";
import Demographics from "./components/newPatientFrom/demographics";
import NextOfKin from "./components/newPatientFrom/nextOfKin";
import Scheme from "./components/newPatientFrom/scheme";

const NewPatient = () => {
  const navigate = useNavigate();
  const [presentTab, setPresentTab] = useState(0);
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    phone: "",
    occupation: "",
    address: {
      image: 'https://cdn-icons-png.flaticon.com/512/666/666201.png',
      nextAppointment: null
    },
    salutation: "",
  });

  return (
    <div className="">
      <div
        className="px-5 py-3 bg-white rounded-lg flex items-center justify-between cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <div className="flex items-center gap-2">
          <FaArrowLeftLong style={{ color: "#3f56cd" }} />
          <span className="text-ha-primary1">Go Back</span>
        </div>
        <h1 className="font-bold text-xl">New Patient</h1>
      </div>

      <div className="rounded-lg py-3 px-5 bg-white mt-3 h-[auto]">
        <div className="bg-ha-secondary1">
          <Stepper
            styleConfig={{
              activeBgColor: "#2b35af",
              activeTextColor: "#ffffff",
              completedBgColor: "#3f56cd",
              completedTextColor: "#ffffff",
              inactiveBgColor: "white",
              inactiveTextColor: "#555",
              size: "2em",
              circleFontSize: "1rem",
              labelFontSize: "0.875rem",
              borderRadius: "50%",
              fontWeight: 500,
            }}
            steps={[
              { label: "Personal Details" },
              { label: "Demographics" },
              { label: "Next of Kin" },
              { label: "Scheme" },
            ]}
            activeStep={presentTab}
          />
        </div>
        <form>
          {presentTab === 0 && (
            <PersonalInfo
              setPresentTab={setPresentTab}
              patient={patient}
              setPatient={setPatient}
            />
          )}
          {presentTab === 1 && (
            <Demographics
              setPresentTab={setPresentTab}
              patient={patient}
              setPatient={setPatient}
            />
          )}
          {presentTab === 2 && (
            <NextOfKin
              setPresentTab={setPresentTab}
              setPatient={setPatient}
              patient={patient}
            />
          )}
          {presentTab === 3 && (
            <Scheme  patient={patient} setPatient={setPatient} setPresentTab={setPresentTab}/>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewPatient;
