

function NewObservation({ createFormData, departments, setCreateFormData }) {
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
                <label htmlFor="testName">Name Of Observation e.g (Breast CT Scan)</label>
                <input
                    type="text"
                    id="test"
                    name="test"
                    value={createFormData.test}
                    onChange={handleInputChange}
                />
            </div>

            <div className="grid">
                <label htmlFor="centerId">
                    Department
                </label>
                <select
                    id="centerId"
                    name="centerId"
                    value={createFormData.centerId}
                    onChange={handleInputChange}
                >
                    <option value="">Select...</option>
                    {departments?.data?.map((el) => (
                        <option value={el.id}>{el.center}</option>
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

export default NewObservation