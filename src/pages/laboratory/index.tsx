import { useState } from "react";
import SearchLab from "./componenets/SearchLab";
import Table from "./componenets/table";
function Laboratory() {
  const [labSearch, setLabSearch] = useState([]);
  console.log(labSearch);

  return (
    <div className="Patients">
      <SearchLab setLabSearch={setLabSearch} />
      <Table labSearch={labSearch} />
    </div>
  );
}

export default Laboratory;
