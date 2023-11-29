import { useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import BasicModal from "../../../components/ui/modals/basicModal";
import NewNursingbOrder from "./modal/newNursingOrder";
import MainSearchInput from "../../../components/ui/mainSearchInput";

const SearchLab = () => {
  const [search, setSearch] = useState("");

  const [newLabOrderModal, setNewLabOrderModal] = useState(false);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(search);
    }
  };

  const resetHandler = () => {
    setSearch("");
  };

  const searchHandler = () => {
    console.log(search);
  };

  return (
    <>
      <div className="Patients">
        <FilterHeader
          title="Nursing Workbench"
          buttonTitle="New Nursing Order"
          resetFilter={resetHandler}
          search={searchHandler}
          handleCreate={() => {
            setNewLabOrderModal(true);
          }}
        >
          <form>
            <MainSearchInput
              Label=" Search Patient"
              value={search}
              placeholder="Search by Patient Name, ID, Email, Phone Number"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </form>
        </FilterHeader>
      </div>
      <BasicModal
        title="New Nursing Order"
        setOpenModal={setNewLabOrderModal}
        openModal={newLabOrderModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="5xl"
        submitHandler={() => {
          console.log("save");
        }}
      >
        <NewNursingbOrder />
      </BasicModal>
    </>
  );
};

export default SearchLab;
