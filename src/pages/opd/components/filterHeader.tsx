import { BiSearchAlt } from "react-icons/bi";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import { useState } from "react";
import Loader from "../../../components/ui/loader";
import BasicModal from "../../../components/ui/modals/basicModal";
import NewConsultation from "./newConsultation";
import { useGetUserByToken } from "../../../hooks/reactQuery/useUser";
import { useNewConsultation, useSearchVisit } from "../../../hooks/reactQuery/useVisit";
import { toast } from "react-toastify";

function Patients({ setConsults }) {
  const [search, setSearch] = useState("");
  const { isLoading, data, refetch } = useSearchVisit(search);
  const [showCreate, setShowCreate] = useState(false)
  const [patientId, setPatientId] = useState("");
  const [scheme, setScheme] = useState("");
  const [dept, setDept] = useState("");
  const [doctorId, setDoctorId] = useState('')
  const { data: userData } = useGetUserByToken();
  console.log(userData, 'userData')
  const {
    data: consultationData,
    isLoading: loadingConsults,
    mutate:createMutate
} = useNewConsultation();

  setConsults(data);

console.log(consultationData, 'consultationData')

if(consultationData && consultationData?.status) {
  toast.success('Successfully Created Consultation')
  createMutate(null)
}
  
  if (isLoading || loadingConsults) {
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

  const createConsultation = async() => {
    try {
      const data = {
        doctorId: userData?.data?.id,
        visit: dept,
        patientId:patientId,
        schemeId:scheme
      }
      await createMutate(data)
    } catch (error) {
      
    }
  }

  return (
    <div className="Patients">
      {showCreate &&    <BasicModal
        title="Order New Visit"
        setOpenModal={setShowCreate}
        openModal={showCreate}
        cancelTitle="Cancel"
        submitTitle="Create"
        showCancelButton={true}
        showSubmitButton={true}
        size="3xl"
        submitHandler={() => {
         createConsultation()
        }}
      >
        <NewConsultation setDoctorId={setDoctorId} setPatientId={setPatientId} setScheme={setScheme} setDept={setDept}/>
      </BasicModal>}
      <FilterHeader
        title="All Doctor's Visits"
        buttonTitle="Create New Visit"
        resetFilter={resetHandler}
        search={searchHandler}
        handleCreate={() => {
          setShowCreate(true)
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
