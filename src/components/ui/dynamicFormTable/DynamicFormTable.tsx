import React, { useState, ChangeEvent } from "react";

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
    rowIndex: number
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
        style={{ borderCollapse: "separate", borderSpacing: "0 1rem" }}
      >
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="pl-1">
                <input
                  placeholder="Observation"
                  type="text"
                  name="observation"
                  value={row.observation}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              <td className="pl-1">
                <input
                  placeholder="Unit"
                  type="text"
                  name="unit"
                  value={row.unit}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              <td className="pl-1">
                <input
                  placeholder="Value"
                  type="text"
                  name="value"
                  value={row.value}
                  onChange={(event) => handleChange(event, rowIndex)}
                  style={{ border: "none", width: "100%" }}
                />
              </td>
              <td className="pl-1">
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
                  <span
                    className="border border-red-500 text-red-500 px-2 py-2 rounded-md mx-3 bg-red-100 cursor-pointer hover:bg-red-200 "
                    onClick={() => handleDeleteRow(rowIndex)}
                  >
                    Delete
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <span
        className="border bg-blue-500 px-2 py-2 rounded-[.5rem] mx-1 cursor-pointer hover:bg-blue-400 text-white"
        onClick={handleAddRow}
      >
        Add New Row
      </span>
      {/* <div className="body"> {JSON.stringify(rows)} </div> */}
    </div>
  );
};

export default DynamicFormTable;
