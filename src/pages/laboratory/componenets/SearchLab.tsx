import { useState } from "react";
import FilterHeader from "../../../components/ui/filterheaders/filterHeader";
import CustomMultiSelect from "../../../components/ui/inputSelect/inputSelect";

const countries = ["United States", "Canada", "France", "Germany"];
const cities = ["New York", "Toronto", "Paris", "Berlin"];
const colors = ["Red", "Blue", "Green", "Yellow"];

const SearchLab = () => {
  const [selectedServiceCenter, setSelectedServiceCenter] = useState([]);
  const [selectedLabCenter, setSelectedLabCenter] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleServiceCenterChange = (selectedItems: any) => {
    console.log("Selected Service Center:", selectedItems);
    setSelectedServiceCenter(selectedItems);
  };

  const handleLabCenterChange = (selectedItems: any) => {
    console.log("Selected Lab Center:", selectedItems);
    setSelectedLabCenter(selectedItems);
  };

  const handleStatusChange = (selectedItems: any) => {
    console.log("Selected Status:", selectedItems);
    setSelectedStatus(selectedItems);
  };

  const convertToOptions = (data: string[]) => {
    return data.map((item) => ({ label: item, value: item }));
  };

  const resetHandler = () => {
    console.log("reset");
  };

  const searchHandler = () => {
    console.log("search");
  };

  return (
    <div className="Patients">
      <FilterHeader
        title="Laboratory Records"
        buttonTitle="New Lab Order"
        resetFilter={resetHandler}
        search={searchHandler}
      >
        <form className="flex flex-wrap gap-2">
          <div className="w-[24%]">
            <h1>Service Center</h1>
            <CustomMultiSelect
              options={convertToOptions(countries)}
              labelledBy="Select Service Center"
              onSelectChange={handleServiceCenterChange}
              value={selectedServiceCenter}
              isMultiSelect={true}
              placeholder="Select Service Center"
            />
          </div>
          <div className="w-[24%]">
            <h1>Lab Center</h1>
            <CustomMultiSelect
              options={convertToOptions(cities)}
              labelledBy="Select Lab Center"
              onSelectChange={handleLabCenterChange}
              value={selectedLabCenter}
              isMultiSelect={false}
              placeholder="Select Lab Center"
            />
          </div>
          <div className="w-[24%]">
            <h1>Status</h1>
            <CustomMultiSelect
              options={convertToOptions(colors)}
              labelledBy="Select Status"
              onSelectChange={handleStatusChange}
              value={selectedStatus}
              isMultiSelect={false}
              placeholder="Select Status"
            />
          </div>
          <div className="w-[24%]">
            <div className="mb-2 block">
              <label htmlFor="username">Patient ID / Name</label>
            </div>
            <input
              id="username"
              className="w-full"
              placeholder="name@company.com"
              required
            />
          </div>
        </form>
      </FilterHeader>
    </div>
  );
};

export default SearchLab;
