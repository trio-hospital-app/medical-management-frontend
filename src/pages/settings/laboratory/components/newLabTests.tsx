function NewLabTests({ createFormData, setCreateFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-2 grid gap-4">
      <div className="grid">
        <label htmlFor="testName">Name Of Test e.g (Malaria Parasite)</label>
        <input
          type="text"
          id="testName"
          name="panel"
          value={createFormData.panel}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid">
        <label htmlFor="labContainer">
          Laboratory Container e.g (Plain Bottle, EDTA)
        </label>
        <select
          id="labContainer"
          name="specimenId"
          value={createFormData.specimenId}
          onChange={handleInputChange}
        >
          <option value="">Select...</option>
          <option value="EDTA">EDTA</option>
          <option value="Plain Bottle">Plain Bottle</option>
        </select>
      </div>
      <div className="grid">
        <label htmlFor="labDepartment">
          Laboratory Department e.g (Haematology)
        </label>
        <select
          id="labDepartment"
          name="centerId"
          value={createFormData.centerId}
          onChange={handleInputChange}
        >
          <option value="">Select...</option>
          <option value="Haematology">Haematology</option>
          <option value="Microbiology">Microbiology</option>
        </select>
      </div>
      <div className="grid">
        <label htmlFor="costPrice">Cost Price</label>
        <input
          type="number"
          id="costPrice"
          name="cost"
          value={createFormData.cost}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default NewLabTests;
