import { useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import BasicModal from "../../../components/ui/modals/basicModal";
import NewLabOrder from "./modal/newLabOrder";
import MainSearchInput from "../../../components/ui/mainSearchInput";

const SearchLab = () => {
  const [search, setSearch] = useState("");
  const [newLabOrderModal, setNewLabOrderModal] = useState(false);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          title="Laboratory Workbench"
          buttonTitle="New Lab Order"
          resetFilter={resetHandler}
          search={searchHandler}
          handleCreate={() => {
            setNewLabOrderModal(true);
          }}
        >
          <form className="">
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
        title="New Lab Order"
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
        <NewLabOrder />
      </BasicModal>
    </>
  );
};

export default SearchLab;
