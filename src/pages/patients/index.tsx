import FilterHeader from "./components/filterHeader";
import PatientTable from "./components/table";

function Patients() {
  return (
    <div className="Patients">
      <FilterHeader />
      <PatientTable />
    </div>
  );
}

export default Patients;
