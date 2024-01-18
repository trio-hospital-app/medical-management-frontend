import { useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import BasicModal from "../../../components/ui/modals/basicModal";
import NewImagingOrder from "../components//modal/NewImagingOrder";
import MainSearchInput from "../../../components/ui/mainSearchInput";
import {
  useAddRadiology,
  useSearchRadiologyPatient,
} from "../../../hooks/reactQuery/useRadiology";
import Loader from "../../../components/ui/loader";

const SearchImaging = ({ setRadiologySearch, setReload }) => {
  const [search, setSearch] = useState("");
  const [selectScheme, setSelectedScheme] = useState('');
  const [selectRadiologyTest, setSelectRadiologyTest] = useState([]);
  const [formComment, setFormComment] = useState("");
  const [diagnosisComment, setDiagnosisComment] = useState("");
  const [patientId, setPatientId] = useState("");
  const [newRadiologyModal, setNewRadiologyModal] = useState(false);

  const {
    data: patientData,
    isLoading: loadingSearch,
    refetch,
  } = useSearchRadiologyPatient(search);

  setRadiologySearch(patientData);

  const {
    mutate,
    status: addLabStatus,
    isLoading: NewRadiologyLoading,
  } = useAddRadiology();

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await refetch();
    }
  };

  const resetHandler = () => {
    setSearch("");
  };

  const searchHandler = async (event: any) => {
    event.preventDefault();
    await refetch();
  };

  // api call to create new radiology order
  const handleCreateNewRadiologyOrder = async () => {
    const RadiologyData: any = {
      testArr: selectRadiologyTest,
      patientId: patientId,
      text: formComment,
      diagnosis: diagnosisComment,
      schemeId: selectScheme,
    };
    await mutate(RadiologyData);
    setNewRadiologyModal(false);
    setReload(true);
  };

  return (
    <>
      {loadingSearch && <Loader />}
      {NewRadiologyLoading && <Loader />}
      <div className="Patients">
        <FilterHeader
          title="Radiology Workbench"
          buttonTitle="New Imaging Order"
          resetFilter={resetHandler}
          search={() => searchHandler(event)}
          handleCreate={() => {
            setNewRadiologyModal(true);
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
        title="New Imaging Order"
        setOpenModal={setNewRadiologyModal}
        openModal={newRadiologyModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="5xl"
        submitHandler={handleCreateNewRadiologyOrder}
      >
        <NewImagingOrder
          setSelectedScheme={setSelectedScheme}
          setSelectRadiologyTest={setSelectRadiologyTest}
          setFormComment={setFormComment}
          setPatientId={setPatientId}
          formComment={formComment}
          selectRadiologyTest={selectRadiologyTest}
          selectScheme={selectScheme}
          setDiagnosisComment={setDiagnosisComment}
          diagnosisComment={diagnosisComment}
        />
      </BasicModal>
    </>
  );
};

export default SearchImaging;
