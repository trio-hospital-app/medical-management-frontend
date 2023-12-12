import { useState } from "react";
import FilterHeader from "./components/filterHeader";
import PatientTable from "./components/tables/patientTable";

function Patients() {
  const [patientData, setPatientdata] = useState([]);

  return (
    <div className="Patients">
      <FilterHeader setPatientdata={setPatientdata} />
      <PatientTable patientData={patientData} />
    </div>
  );
}

export default Patients;
