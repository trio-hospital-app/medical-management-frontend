import { useState } from "react";
import CustomPatientCard from "../../../../components/ui/customPatientCard/customPatientCard";
import CustomMultiSelect from "../../../../components/ui/inputSelect/inputSelect";
import TextareaAutosize from "react-textarea-autosize";
import SearchComponent from "../../../../components/ui/SearchComponent";
import Loader from "../../../../components/ui/loader";
import { useSearchPatient } from "../../../../hooks/reactQuery/usePatients";
import { useGetRadiologyObservation } from "../../../../hooks/reactQuery/useRadiology";

const NewRadiologyOrder = ({
  setSelectedScheme,
  setSelectRadiologyTest,
  setFormComment,
  setPatientId,
  formComment,
  selectRadiologyTest,
  selectScheme,
  setDiagnosisComment,
  diagnosisComment,
}) => {
  const [search, setSearch] = useState("");

  const {
    data: patientData,
    isLoading: loadingSearch,
    refetch,
    isError: errorSearch,
  } = useSearchPatient(search);

  const { data: radiologyTestData } = useGetRadiologyObservation();

  // function to set the search patien text
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  //function to search patient
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await refetch();
    }
  };

  // if patient is found render it true/ false
  const foundRecord = patientData?.status;

  //patient info to render
  const patient = patientData?.data[0];

  // drop down data
  const schemes = patient?.schemeId || [];
  const radiologyTest = radiologyTestData?.data || [];

  setPatientId(patient?.id);

  const handleSchemeChange = (selectedItems: any) => {
    setSelectedScheme(selectedItems);
  };

  const handleObservationChange = (selectedItems: any) => {
    setSelectRadiologyTest(selectedItems);
  };

  return (
    <div>
      {loadingSearch && <Loader />}
      <>
        <SearchComponent
          Label=" Search Patient"
          value={search}
          placeholder="Search by Patient Name, ID, Email, Phone Number"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {foundRecord && patient && (
          <div>
            <CustomPatientCard
              key={patient.id}
              patientName={`${patient?.salutation} ${patient?.firstName} ${patient?.middleName} ${patient?.lastName}`}
              patientID={patient?.patientId}
              patientEmail={patient.address.email}
              imgSrc={patient?.address?.image}
              gender={patient?.gender}
              phoneNumber={patient?.phone}
              religion={patient?.address.religion}
              nationality={patient?.address.country}
              maritalStatus={patient?.address.maritalStatus}
              age={patient?.address.dob}
              layout={2}
            />
          </div>
        )}

        {errorSearch && (
          <div className="flex justify-center items-center">
            <p className="text-red-600 font-bold mt-10">No Patient Found</p>
          </div>
        )}

        <div className="flex flex-col justify-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-between pt-5">
            <div className="mb-2 w-[48%]">
              <label className="text-sm font-semibold text-ha-primary1">
                Scheme
              </label>
              <CustomMultiSelect
                options={schemes?.map((scheme) => ({
                  label: scheme.name,
                  value: scheme.id,
                }))}
                labelledBy="Scheme"
                onSelectChange={handleSchemeChange}
                value={(Array?.isArray(selectScheme) ? selectScheme : []).map(
                  (item) => item.id
                )}
                isMultiSelect={false}
                placeholder="Scheme"
                key="scheme"
              />
            </div>
            <div className="mb-2 w-[48%]">
              <label className="text-sm font-semibold text-ha-primary1">
                Observation
              </label>
              <CustomMultiSelect
                options={radiologyTest.map((item) => ({
                  label: item.test,
                  value: item.id,
                }))}
                labelledBy="Select Observation"
                onSelectChange={handleObservationChange}
                value={(Array?.isArray(selectRadiologyTest)
                  ? selectRadiologyTest
                  : []
                ).map((item) => item.id)}
                placeholder="Select Observation"
              />
            </div>
          </div>
          <div className="mb-2 pt-5">
            <label className="text-sm font-semibold text-ha-primary1">
              Diagnosis
            </label>
            <TextareaAutosize
              minRows={3}
              placeholder="Write a diagnosis"
              onChange={(e) => setDiagnosisComment(e.target.value)}
              className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
              value={diagnosisComment}
              maxRows={4}
              required
            />
          </div>
          <div className="mb-2 pt-5">
            <label className="text-sm font-semibold text-ha-primary1">
              Comment
            </label>
            <TextareaAutosize
              minRows={3}
              placeholder="Write a Comment"
              onChange={(e) => setFormComment(e.target.value)}
              className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
              value={formComment}
              maxRows={4}
              required
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default NewRadiologyOrder;
