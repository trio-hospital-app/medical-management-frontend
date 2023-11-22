function CreateNewForm() {
  return (
    <div className="p-5">
      <form className="grid gap-2">
        <div className="">
          <div className=" block">
            <label>Form Title</label>
          </div>
          <input id="patientid" className="w-full" required />
        </div>
        <div className="">
          <div className=" block">
            <label htmlFor="gender">Source</label>
          </div>
          <select name="gender" id="gender" className="w-full">
            <option value="male"></option>
            <option value="male">Laboratory</option>
            <option value="female">Doctors</option>
            <option value="female">Radiology</option>
            <option value="female">Pharmacy</option>
            <option value="female">Nursing</option>
            <option value="female">Finance</option>
          </select>
        </div>
        <div className="">
          <div className=" block">
            <label htmlFor="firstName">Form Description</label>
          </div>
          <textarea
            id="firstName"
            className="w-full border-2 rounded-lg"
            rows={5}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default CreateNewForm;
