/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import BasicModal from "../../../components/ui/modals/basicModal";
import NewLabOrder from "./modal/newLabOrder";
import MainSearchInput from "../../../components/ui/mainSearchInput";
import { useAddLab } from "../../../hooks/reactQuery/useLabs";
import Loader from "../../../components/ui/loader";
import { toast } from "react-toastify";
import { useSearchLabPatient } from "../../../hooks/reactQuery/useLabs";

const SearchLab = ({ setLabSearch, setReload }) => {
  const [search, setSearch] = useState("");
  const [newLabOrderModal, setNewLabOrderModal] = useState(false);
  const [selectScheme, setSelectedScheme] = useState([]);
  const [selectLabPanel, setselectLabPanel] = useState([]);
  const [formComment, setFormComment] = useState("");
  const [patientId, setPatientId] = useState("");
  const {
    data: patientData,
    isLoading: loadingSearch,
    refetch,
  } = useSearchLabPatient(search);

  setLabSearch(patientData);

  const {
    mutate,
    status: addLabStatus,
    isLoading: NewLabLoading,
  } = useAddLab();

 if (addLabStatus === "success") {
    toast.success("Lab order created successfully");
    mutate(null)
    // refetch()
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const resetHandler = () => {
    setSearch("");
  };

  const searchHandler = async (event: any) => {
    event.preventDefault();
    await refetch();
  };

  // api call to create new lab order
  const handleCreateNewLabOrder = async () => {
    const LabData: any = {
      panelArr: selectLabPanel,
      patientId: patientId,
      text: formComment,
      schemeId: selectScheme,
    };
    await mutate(LabData);
    setNewLabOrderModal(false);
    setReload(true)
  };

  return (
    <>
      {loadingSearch && <Loader />}
      {NewLabLoading && <Loader />}
      <div className="Patients">
        <FilterHeader
          title="Laboratory Workbench"
          buttonTitle="New Lab Order"
          resetFilter={resetHandler}
          search={() => searchHandler(event)}
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
        submitTitle="Create"
        showCancelButton={true}
        showSubmitButton={true}
        // isDisable={disableCreate}
        size="5xl"
        submitHandler={handleCreateNewLabOrder}
      >
        <NewLabOrder
          setSelectedScheme={setSelectedScheme}
          setselectLabPanel={setselectLabPanel}
          setFormComment={setFormComment}
          setPatientId={setPatientId}
          selectLabPanel={selectLabPanel}
          selectScheme={selectScheme}
          formComment={formComment}
        />
      </BasicModal>
    </>
  );
};

export default SearchLab;
