import { useState } from "react";
import FilterHeader from "./components/filterHeader";
import OpdTable from "./components/tables/opdTable";

function OPD() {
  const [consults, setConsults] = useState([]);
  return (
    <div className="Patients">
      <FilterHeader setConsults={setConsults} />
      <OpdTable consults={consults} />
    </div>
  );
}

export default OPD;
