import { useState } from "react";
import SearchLab from "./componenets/SearchLab";
import Table from "./componenets/table";
function Laboratory() {
  const [labSearch, setLabSearch] = useState([]);
  const [reload, setReload] = useState(false);

  return (
    <div className="Patients">
      <SearchLab setLabSearch={setLabSearch} setReload={setReload} />
      <Table labSearch={labSearch} reload={reload} setReload={setReload}  />
    </div>
  );
}

export default Laboratory;
