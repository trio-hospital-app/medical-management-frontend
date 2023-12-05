import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdSave } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPatient } from "../../../../hooks/reactQuery/usePatients";
import Loader from "../../../../components/ui/loader";
import { toast } from "react-toastify";
import { Button } from "../../../../components/ui/button";
import { useGetScheme } from "../../../../hooks/reactQuery/useSchemes";

function Scheme({ patient, setPatient, setPresentTab }) {
  const navigate = useNavigate();
  const [schemeData, setSchemeData] = useState({
    schemes: [
      {
        schemeType: "",
        enrolleeId: "",
        relationship: "",
        expirationDate: "",
      },
    ],
  });

  const { data: schemes } = useGetScheme();

  const handleAddScheme = () => {
    setSchemeData((prevData) => ({
      schemes: [
        ...prevData.schemes,
        {
          schemeType: "",
          enrolleeId: "",
          relationship: "",
          expirationDate: "",
        },
      ],
    }));
  };

  const handleDeleteScheme = (index: number) => {
    setSchemeData((prevData) => {
      const updatedSchemes = [...prevData.schemes];
      updatedSchemes.splice(index, 1);
      return {
        schemes: updatedSchemes,
      };
    });
  };

  const { mutate, isLoading, data } = useAddPatient();

  if (isLoading) {
    return <Loader />;
  }

  if (data && data?.status) {
    toast.success("Patient added successfully");
    navigate("/patients");
  }

  const handleSaveRecord = async () => {
    // Attach schemeData to the patient.address object
    setPatient((prevPatient) => ({
      ...prevPatient,
      address: {
        ...prevPatient.address,
        schemes: schemeData.schemes,
      },
    }));

    await mutate(patient);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPresentTab(2);
  };

  return (
    <div className="grid">
      <div className=" overflow-y-auto">
        {schemeData.schemes.map((_scheme, index) => (
          <div
            key={index}
            className="grid md:grid-cols-5 gap-3 items-center mt-5 bg-gray-100 p-2 rounded "
          >
            <div className="">
              <div className=" block">
                <label>Scheme</label>
              </div>
              <select name="gender" id="gender" className="w-full">
                <option value="walk-in"></option>
                {schemes?.data?.map((el) => (
                  <option value={el.name} className="capitalize">
                    {el?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <div className=" block">
                <label>Enrollee ID</label>
              </div>
              <input className="w-full" required />
            </div>

            <div className="">
              <div className=" block">
                <label>Relationship with Enrollee</label>
              </div>
              <select name="gender" id="gender" className="w-full">
                <option value="walk-in"></option>
                <option value="Self">Self</option>
                <option value="Insurance">Insurance</option>
                <option value="Cooperate">Cooperate</option>
                <option value="Family">Family</option>
              </select>
            </div>

            <div className="">
              <div className=" block">
                <label>Scheme Expiration Date</label>
              </div>
              <input className="w-full" required type="date" />
            </div>

            <div
              className="flex items-center justify-end gap-2 cursor-pointer"
              onClick={() => handleDeleteScheme(index)}
            >
              <MdDelete className="text-red-500" />
              <span className="text-red-500">delete</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center w-[15%] justify-center gap-2 bg-ha-secondary1 p- mt-5 cursor-pointer rounded-md"
          onClick={handleAddScheme}
        >
          <FaPlus style={{ color: "#3f56cd" }} />
          <span className="text-ha-primary1">Add Scheme</span>
        </div>

        <div className="flex items-center justify-end mt-5 gap-2">
          <Button
            className="hover:bg-blue-400 text-ha-primary1 border border-ha-primary1 w-[100px]"
            onClick={handleBack}
          >
            Go Back
          </Button>
          <div
            className="flex items-center justify-center gap-2 bg-ha-primary1 py-2 px-5 cursor-pointer rounded-md"
            onClick={handleSaveRecord}
          >
            <IoMdSave style={{ color: "white" }} />
            <span className="text-white">Save Patient Record</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheme;
