import { useState, forwardRef, useImperativeHandle } from "react";
import CustomPatientCard from "../../../../components/ui/customPatientCard/customPatientCard";
import CustomMultiSelect from "../../../../components/ui/inputSelect/inputSelect";
import TextareaAutosize from "react-textarea-autosize";
import SearchComponent from "../../../../components/ui/SearchComponent";
import { useSearchPatient } from "../../../../hooks/reactQuery/usePatients";
import { useGetClinicPanel } from "../../../../hooks/reactQuery/useClinicPanels";
import { useGetClinicCenter } from "../../../../hooks/reactQuery/useClinicCenters";
import { useGetSpecimen } from "../../../../hooks/reactQuery/useSpecimens";
import Loader from "../../../../components/ui/loader";

const cities = ["New York", "Toronto", "Paris", "Berlin"];

const NewLabOrder = forwardRef((_props, ref) => {
  const [search, setSearch] = useState("");
  const [selectedLabCenter, setSelectedLabCenter] = useState([]);
  const [selectLabPanel, setselectLabPanel] = useState([]);
  const [selectSpecimen, setselectSpecimen] = useState([]);
  const [formComment, setFormComment] = useState("");
  const { data: pateintData, isLoading, refetch } = useSearchPatient(search);
  const { data: clinicCenterData } = useGetClinicCenter();
  const { data: clinicPanelData } = useGetClinicPanel();
  const { data: specimenData } = useGetSpecimen();

  // function to set the search patien text
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  // lab drop down data
  const clinicCenters = clinicCenterData?.data || [];
  const clinicPanels = clinicPanelData?.data || [];
  const specimens = specimenData?.data || [];

  // console.log(specimenData.data);
  //function to search pateint
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await refetch();
    }
  };

  // if patient is found render it true/ false
  const foundRecord = pateintData?.status;

  //patient info to render
  const patient = pateintData?.data[0];
  //patient id to to sent to backen
  const patientId = patient?.patientId;

  const convertToOptions = (data: string[]) => {
    return data.map((item, index) => ({
      label: item,
      value: item,
      key: index,
    }));
  };

  // calculate age
  const calculateAge = (dob: string) => {
    const dateOfBirth = new Date(dob);

    // Check if dateOfBirth is a valid date
    if (isNaN(dateOfBirth.getTime())) {
      return "Not found";
    }

    const birthYear = dateOfBirth.getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const handleLabCenterChange = (selectedItems: any) => {
    console.log("Selected Lab Center:", selectedItems);
    setSelectedLabCenter(selectedItems);
  };
  const handleLabPanelChange = (selectedItems: any) => {
    console.log("Selected lab panel:", selectedItems);
    setselectLabPanel(selectedItems);
  };
  const handleSpecimenChange = (selectedItems: any) => {
    console.log("Selected specimen type:", selectedItems);
    setselectSpecimen(selectedItems);
  };

  const handleAddNewLabApi = () => {
    console.log(patientId);
    console.log(selectedLabCenter);
    console.log(selectLabPanel);
    console.log(selectSpecimen);
    console.log(formComment);
  };
  useImperativeHandle(ref, () => ({
    handleAddNewLabApi,
  }));

  return (
    <div>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}

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
            imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            gender={patient?.gender}
            phoneNumber={patient?.phone}
            religion={patient?.address.religion}
            nationality={patient?.address.country}
            maritalStatus={patient?.address.maritalStatus}
            age={calculateAge(patient?.address.dob)}
            layout={2}
          />
        </div>
      )}

      <div className="flex flex-col justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-5">
          <div className="mb-2 w-[48%]">
            <label className="text-sm font-semibold text-ha-primary1">
              Scheme
            </label>
            <CustomMultiSelect
              options={convertToOptions(cities)}
              labelledBy="Scheme"
              onSelectChange={handleLabCenterChange}
              value={selectedLabCenter}
              isMultiSelect={false}
              placeholder="Scheme"
              key="scheme"
            />
          </div>
          <div className="mb-2 w-[48%]">
            <label className="text-sm font-semibold text-ha-primary1">
              Service Center
            </label>
            <CustomMultiSelect
              options={clinicCenters.map((center) => ({
                label: center.center,
                value: center.id,
              }))}
              labelledBy="Select Service Center"
              onSelectChange={handleLabCenterChange}
              value={(Array?.isArray(selectedLabCenter)
                ? selectedLabCenter
                : []
              ).map((item) => item.id)}
              isMultiSelect={false}
              placeholder="Select Service Center"
            />
            ˝
          </div>
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Lab Panel
          </label>
          <CustomMultiSelect
            options={clinicPanels.map((panel) => ({
              label: panel.panel,
              value: panel.id,
            }))}
            labelledBy="Select Lab Center"
            onSelectChange={handleLabPanelChange}
            value={(Array?.isArray(selectLabPanel) ? selectLabPanel : []).map(
              (item) => item.id
            )}
            isMultiSelect={false}
            placeholder="Select Lab Center"
          />
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Specimen Type
          </label>
          <CustomMultiSelect
            options={specimens?.map((specimen) => ({
              label: specimen.specimen,
              value: specimen.id,
            }))}
            labelledBy="Select Specimen Type"
            onSelectChange={handleSpecimenChange}
            value={(Array?.isArray(selectSpecimen) ? selectSpecimen : []).map(
              (item) => item.id
            )}
            isMultiSelect={false}
            placeholder="Select Specimen Type"
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
          />
        </div>
      </div>
    </div>
  );
});

export default NewLabOrder;
