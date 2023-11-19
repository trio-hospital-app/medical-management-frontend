import { useState } from "react";


const NewPatient = () => {
  const [formData, setFormData] = useState({
    salutation: 'Mr.',
    firstname: 'John',
    middlename: 'Chisom',
    lastname: 'Doe',
    // ... other initial form values
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send data to the backend
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Personal Info */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salutation">
                Salutation
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                id="salutation"
                type="text"
                placeholder="Salutation"
                name="salutation"
                value={formData.salutation}
                onChange={handleChange}
              />
            </div>
            {/* ... other input fields for personal info */}
          </div>
        </div>

        {/* Demographics */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Demographics</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* ... input fields for demographics */}
          </div>
        </div>

        {/* Next of Kin */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Next of Kin</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* ... input fields for next of kin */}
          </div>
        </div>

        {/* Payment Info */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Payment Information</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* ... input fields for payment info */}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPatient;
