import { BiSearchAlt } from "react-icons/bi";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSearchPatient } from "../../../hooks/reactQuery/usePatients";
import Loader from "../../../components/ui/loader";

function Patients({ setPatientdata }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { isLoading, data, refetch } = useSearchPatient(search);

  setPatientdata(data);
  if (isLoading) {
    return <Loader />;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await refetch();
    }
  };

  const resetHandler = () => {
    setSearch("");
  };

  const searchHandler = async () => {
    await refetch();
  };

  return (
    <div className="Patients">
      <FilterHeader
        title="Patient Records"
        buttonTitle="Create New Patient"
        resetFilter={resetHandler}
        search={searchHandler}
        handleCreate={() => {
          navigate("/patients/new");
        }}
      >
        <form className="grid">
          <div className="flex w-full border rounded-lg items-center px-5">
            <div>
              <BiSearchAlt />
            </div>
            <input
              type="text"
              name="search"
              value={search}
              placeholder="Search for patients"
              className="border-none border outline-none w-[100%] inputLess"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </form>
      </FilterHeader>
    </div>
  );
}

export default Patients;
