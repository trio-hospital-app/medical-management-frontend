import { useState } from "react";
import FilterHeader from "./components/filterHeader";
import PharmacyTable from "./components/tables/pharmacyTable";

function Pharmacy() {
  const [treatments, setreatments] = useState([]);
  return <div className="Patients">     <FilterHeader setreatments={setreatments} />
    <PharmacyTable treatments={treatments} />
    </div>;
}

export default Pharmacy;
