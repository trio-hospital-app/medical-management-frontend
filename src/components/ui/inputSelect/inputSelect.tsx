import React, { useState } from "react";
import { MultiSelect, SelectProps } from "react-multi-select-component";

interface CustomMultiSelectProps extends SelectProps {
  options: { label: string; value: string; disabled?: boolean }[];
  initialValue?: { label: string; value: string }[];
  labelledBy: string;
  onSelectChange?: (selectedValues: string | string[]) => void; // Change the type
  isMultiSelect?: boolean;
  placeholder?: string;
  style?: any;
}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  options,
  initialValue = [],
  labelledBy,
  onSelectChange,
  isMultiSelect = true,
  placeholder,
}) => {
  const [selected, setSelected] = useState(initialValue);

  const handleSelectChange = (
    selectedItems: { label: string; value: string }[]
  ) => {
    setSelected(selectedItems);
    if (onSelectChange) {
      const selectedValues = isMultiSelect
        ? selectedItems.map((item) => item.value)
        : selectedItems.length > 0
          ? selectedItems[0].value
          : "";
      onSelectChange(selectedValues);
    }
  };

  const transformedOptions = options.map((option) => {
    if (typeof option === "string") {
      return { label: option, value: option };
    }
    return option;
  });

  return (
    <div className="mt-2">
      {isMultiSelect ? (
        <MultiSelect
          className="capitalize"
          options={transformedOptions}
          value={selected}
          onChange={handleSelectChange}
          labelledBy={labelledBy}
          disableSearch={!isMultiSelect}
        />
      ) : (
        <select
          className="capitalize"
          value={selected[0]?.value}
          onChange={(e) =>
            handleSelectChange([
              { label: e.target.value, value: e.target.value },
            ])
          }
          style={{
            padding: "7px",
            width: "100%",
          }}
        >
          <option disabled={!placeholder} value="">
            {placeholder || "Select an option"}
          </option>
          {transformedOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CustomMultiSelect;
