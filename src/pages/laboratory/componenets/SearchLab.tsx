import { Label, Select } from "flowbite-react";

interface SearchLabProps {
  label: string;
  options: string[];
  id: string;
  placeholder?: string; // Added optional placeholder property
}

function SearchCard({ label, options, placeholder, ...rest }: SearchLabProps) {
  return (
    <div>
      <Label
        htmlFor={rest.id}
        value={label}
        style={{ color: "#3f56cd" }}
      />
      <Select {...rest} className="w-[25rem] flowbite-select" style={{ backgroundColor: '#E8EBFF', color:"#3f56cd" }}>
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
}

const SearchLab = () => {
  const countries = ["United States", "Canada", "France", "Germany"];
  const cities = ["New York", "Toronto", "Paris", "Berlin"];
  const colors = ["Red", "Blue", "Green", "Yellow"];

  return (
    <div className="border border-red-500 flex flex-col md:flex-row justify-between items-center bg-white">
      <SearchCard
        label="Service Center"
        id="country"
        options={countries}
        placeholder="Select a Service Center"
      />
      <SearchCard
        label="Lab Center"
        id="city"
        options={cities}
        placeholder="Select a city"
      />
      <SearchCard
        label="Status"
        id="color"
        options={colors}
        placeholder="Select a color"
      />
    </div>
  );
};

export default SearchLab;
