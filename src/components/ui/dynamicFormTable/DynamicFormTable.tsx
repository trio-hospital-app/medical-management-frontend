import React, { useState, ChangeEvent } from "react";
import { Button } from "../button";

interface Row {
  observation: string | number;
  unit: string | number;
  value: string | number;
  range: string | number;
}

interface DynamicFormTableProps {
  onRowDataChange: (rowData: Row[]) => void;
}

const DynamicFormTable: React.FC<DynamicFormTableProps> = ({
  onRowDataChange,
}) => {
  const [rows, setRows] = useState<Row[]>([
    {
      observation: "",
      unit: "",
      value: "",
      range: "",
    },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { observation: "", unit: "", value: "", range: "" }]);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    rowIndex: number,
  ) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[rowIndex][name as keyof Row] = value;
    setRows(updatedRows);
    onRowDataChange(updatedRows);
  };

  const handleDeleteRow = (rowIndex: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(rowIndex, 1);
    setRows(updatedRows);
  };

  return (
    <div>
      <table
        className=" flex flex-col md:flex-row justify-between text-left"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 1rem",
          width: "100%",
          paddingLeft: ".5rem",
          paddingRight: "1rem",
        }}
      >
        <tbody className="w-[100%]">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="w-[100%]">
              <td className="pl-1 w-[20%]">
                <input
                  placeholder="Observation"
                  type="text"
                  name="observation"
                  value={row.observation}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              <td className="pl-1 w-[20%]">
                <input
                  placeholder="Unit"
                  type="text"
                  name="unit"
                  value={row.unit}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              <td className="pl-1 w-[20%]">
                <input
                  placeholder="Value"
                  type="text"
                  name="value"
                  value={row.value}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              <td className="pl-1 w-[20%]">
                <input
                  placeholder="Reference Range"
                  type="text"
                  name="range"
                  value={row.range}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              {rows.length > 1 && (
                <td>
                  <Button
                    className=" text-white  bg-red-500 hover:bg-red-400 w-[auto] mx-3  "
                    onClick={() => handleDeleteRow(rowIndex)}
                  >
                    Delete
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        onClick={handleAddRow}
        className="bg-ha-primary1 text-white  hover:bg-blue-900 mx-3"
      >
        Add New Row
      </Button>
      {/* <div className="body"> {JSON.stringify(rows)} </div> */}
    </div>
  );
};

export default DynamicFormTable;
