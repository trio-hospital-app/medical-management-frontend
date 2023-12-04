import { useState } from "react";
import SearchLab from "./componenets/SearchLab";
import Table from "./componenets/table";
function Laboratory() {
  const [labSearch, setLabSearch] = useState([]);

  return (
    <div className="Patients">
      <SearchLab setLabSearch={setLabSearch} />
      <Table labSearch={labSearch} />
    </div>
  );
}

export default Laboratory;
