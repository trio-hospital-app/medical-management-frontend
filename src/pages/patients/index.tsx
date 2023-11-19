import FilterHeader from "./components/filterHeader";
import PatientTable from "./components/tables/patientTable";

function Patients() {
  return (
    <div className="Patients">
      <FilterHeader />
      <PatientTable />
    </div>
  );
}

export default Patients;
