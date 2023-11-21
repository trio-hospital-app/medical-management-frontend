import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import CustomPatientCard from "../../../../components/ui/customPatientCard/customPatientCard";
import CustomMultiSelect from "../../../../components/ui/inputSelect/inputSelect";
import TextareaAutosize from "react-textarea-autosize";

const countries = ["United States", "Canada", "France", "Germany"];
const cities = ["New York", "Toronto", "Paris", "Berlin"];
const colors = ["Red", "Blue", "Green", "Yellow"];

const NewLabOrder = () => {
  const [search, setSearch] = useState("");
  const [foundRecode, setFoundRecode] = useState(false);
  const [selectedLabCenter, setSelectedLabCenter] = useState([]);
  const [formComment, setFormComment] = useState("");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(search);
      if (search.trim() === "Abraham") {
        setFoundRecode(true);
      } else {
        setFoundRecode(false);
      }
    }
  };

  const convertToOptions = (data: string[]) => {
    return data.map((item) => ({ label: item, value: item }));
  };

  const handleLabCenterChange = (selectedItems: any) => {
    console.log("Selected Lab Center:", selectedItems);
    setSelectedLabCenter(selectedItems);
  };

  return (
    <div>
      <div>
        <label className="text-sm font-semibold text-ha-primary1 px-5">
            Search Patient
        </label>
        <form
          action=""
          className="flex items-center justify-start border width-full px-5 mx-3 rounded-[.5rem]"
        >
          <div>
            <BiSearchAlt />
          </div>
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Search by Patient Name, ID, Email, Phone Number"
            className="border-none border outline-none w-[100%] inputLess"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>

      {search?.length >= 3 && !foundRecode ? (
        <div className="flex items-center justify-center h-[5rem] border mx-5 my-3 rounded-[1rem] border-ha-primary2">
          <span className="text-ha-primary1">No Record Found</span>
        </div>
      ) : null}
      {foundRecode ? (
        <div>
          <CustomPatientCard
            patientName="Mr. Christopher Abraham"
            patientID="12345667778"
            patientEmail="Christopherabraham8@gmail.com"
            imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            gender="Male"
            phoneNumber="12345667778"
            religion="Christian"
            nationality="Nigeria"
            maritalStatus="Single"
            age="32 years"
            layout={2}
          />
        </div>
      ) : null}

      <div className="flex flex-col justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-5">
          <div className="mb-2 w-[48%]">
            <label className="text-sm font-semibold text-ha-primary1">
              Payer (Sponsor)
            </label>
            <CustomMultiSelect
              options={convertToOptions(cities)}
              labelledBy="Select Payer (Sponsor)"
              onSelectChange={handleLabCenterChange}
              value={selectedLabCenter}
              isMultiSelect={false}
              placeholder="Select Payer (Sponsor)"
            />
          </div>
          <div className="mb-2 w-[48%]">
            <label className="text-sm font-semibold text-ha-primary1">
              Service Center
            </label>
            <CustomMultiSelect
              options={convertToOptions(cities)}
              labelledBy="Select Service Center"
              onSelectChange={handleLabCenterChange}
              value={selectedLabCenter}
              isMultiSelect={false}
              placeholder="Select Service Center"
            />
          </div>
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Lab Panel
          </label>
          <CustomMultiSelect
            options={convertToOptions(cities)}
            labelledBy="Select Lab Center"
            onSelectChange={handleLabCenterChange}
            value={selectedLabCenter}
            isMultiSelect={false}
            placeholder="Select Lab Center"
          />
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Diagnosis
          </label>
          <CustomMultiSelect
            options={convertToOptions(cities)}
            labelledBy="Select Diagnosis"
            onSelectChange={handleLabCenterChange}
            value={selectedLabCenter}
            isMultiSelect={false}
            placeholder="Select Diagnosis"
          />
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Referral Facility
          </label>
          <CustomMultiSelect
            options={convertToOptions(countries)}
            labelledBy="Select Referral Facility"
            onSelectChange={handleLabCenterChange}
            value={selectedLabCenter}
            isMultiSelect={false}
            placeholder="Select Referral Facility"
          />
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Order Physician
          </label>
          <CustomMultiSelect
            options={convertToOptions(colors)}
            labelledBy="Select Physician"
            onSelectChange={handleLabCenterChange}
            value={selectedLabCenter}
            isMultiSelect={false}
            placeholder="Select Physician"
          />
        </div>
        <div className="mb-2 pt-5">
          <label className="text-sm font-semibold text-ha-primary1">
            Observation
          </label>
          <CustomMultiSelect
            options={convertToOptions(cities)}
            labelledBy="Select Observation"
            onSelectChange={handleLabCenterChange}
            value={selectedLabCenter}
            isMultiSelect={false}
            placeholder="Select Observation"
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
};

export default NewLabOrder;
