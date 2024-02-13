import React, { useState, ChangeEvent, useEffect } from "react";
import { Button } from "../button";
import { useUpdateLab } from "../../../hooks/reactQuery/useLabs";
import Loader from "../loader";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

interface Row {
  observation: string | number;
  unit: string | number;
  value: string | number;
  range: string | number;
}

interface EditFormTableProps {
  onRowDataChange: (rowData: Row[]) => void;
  initialRows?: Row[];
  selectedId?: string;
  setReload?: any;
  setIsEditMode?: any;
  rePrint?: any;
  setReprint?: any; 
}

const EditFormTable: React.FC<EditFormTableProps> = ({
  onRowDataChange,
  selectedId,
  setReload,
  setIsEditMode,
  rePrint,
  setReprint,
  initialRows = [{ observation: "", unit: "", value: "", range: "" }], // Default value for initialRows
}) => {
  const [rows, setRows] = useState<Row[]>(initialRows);

  const handleAddRow = () => {
    setRows([...rows, { observation: "", unit: "", value: "", range: "" }]);
  };

  // here is where am making the api call
  const queryClient = useQueryClient();
  const {
    mutate: mutateUpdateResult,
    isLoading: labLoading,
    status,
  } = useUpdateLab();

  if (status === "success") {
    toast.success("Lab Result Updated Successfully");
    setIsEditMode(false);
    mutateUpdateResult(null);
    setReprint(rePrint + 1);

  }

  // Handle form submission
  const handleUpdateLabResult = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate if all required fields are filled
    const isFormValid = rows.every(
      (row) => row.observation && row.unit && row.value,
    );

    if (!isFormValid) {
      // Display an error message or handle validation failure
      console.error("Please fill in all required fields.");
      return;
    }

    try {
      const updateData = rows;
      const labResult = {
        result: updateData,
      };

      await mutateUpdateResult(
        { id: selectedId, data: labResult },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["Lab", selectedId]);
            setReload(true);
          },
        },
      );
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
    onRowDataChange(updatedRows);
  };

  // Update rows when initialRows change (e.g., when switching to edit mode)
  useEffect(() => {
    setRows(initialRows);
  }, [initialRows]);

  return (
    <div>
      {labLoading && <Loader />}
      <form onSubmit={handleUpdateLabResult}>
        <table
          className="flex flex-col md:flex-row justify-between text-left"
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
                    required
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
                    required
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
                    required
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
                    required
                    value={row.range}
                    onChange={(event) => handleChange(event, rowIndex)}
                    style={{ border: "none", width: "100%" }}
                  />
                </td>
                {rows.length > 1 && (
                  <td>
                    <Button
                      className="text-white bg-red-500 hover:bg-red-400 w-[auto] mx-3"
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
          className="bg-ha-primary1 text-white hover:bg-blue-900 mx-3"
        >
          Add New Row
        </Button>
        <Button
          type="submit"
          className="bg-green-600 text-white hover:bg-green-900 mx-3"
        >
          Update Lab Result
        </Button>
      </form>
    </div>
  );
};

export default EditFormTable;
