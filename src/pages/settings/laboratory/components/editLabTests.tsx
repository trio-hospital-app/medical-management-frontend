function EditLabTests({ createFormData, setCreateFormData, specimens }) {
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
        <label htmlFor="labDepartment">
          Laboratory Department e.g (Haematology)
        </label>
        <select
          id="labDepartment"
          name="specimenId"
          value={createFormData.specimenId.id}
          onChange={handleInputChange}
          // disabled={LoadingLab}
        >
          <option value="">Select...</option>
          {specimens?.data?.map((el) => (
            <option value={el.id}>{el.type}</option>
          ))}
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

export default EditLabTests;
