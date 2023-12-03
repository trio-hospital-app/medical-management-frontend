import { useRef, useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import BasicModal from "../../../components/ui/modals/basicModal";
import NewLabOrder from "./modal/newLabOrder";
import MainSearchInput from "../../../components/ui/mainSearchInput";

const SearchLab = () => {
  const addNewLabRef = useRef<any>(null);
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
  
  // ref to call handleApiCall in AddLab order starts here
  const handleApiCallFromAddNewLabRef = () => {
    if (addNewLabRef.current) {
      addNewLabRef.current.handleAddNewLabApi();
    }
  };

  const handleCreateNewLabOrder = () => {
    handleApiCallFromAddNewLabRef();
  };
 // ends here


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
        title="New Lab Order"
        setOpenModal={setNewLabOrderModal}
        openModal={newLabOrderModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="5xl"
        submitHandler={handleCreateNewLabOrder}
      >
        <NewLabOrder ref={addNewLabRef} />
      </BasicModal>
    </>
  );
};

export default SearchLab;
