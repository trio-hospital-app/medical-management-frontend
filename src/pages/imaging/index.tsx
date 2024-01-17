import { useState } from "react";
import Table from "./components//table";
import SearchImaging from "./components/SearchImaging";

function Laboratory() {
  const [radiologySearch, setRadiologySearch] = useState([]);
  const [reload, setReload] = useState(false);
  return (
    <div className="Patients">
      <SearchImaging
        setRadiologySearch={setRadiologySearch}
        setReload={setReload}
      />
      <Table
        radiologySearch={radiologySearch}
        reload={reload}
        setReload={setReload}
      />
    </div>
  );
}

export default Laboratory;
