function TakeNursingVitals() {
  return (
    <div>
      {" "}
      <form className="p-10 grid md:grid-cols-4 gap-2">
        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Time Taken</label>
          </div>
          <input type="date" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Weight (kg)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Height (cm)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">BMI (kg/m2)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Systolic B.P</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Diastolic B.P</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Temperature °C</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Respiratory Rate (/min)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Heart Rate (BPM)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Urine Output</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Blood Sugar (F)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Blood Sugar (R)</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">SPO2</label>
          </div>
          <input type="number" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">AVPU</label>
          </div>
          <input type="text" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Trauma</label>
          </div>
          <input type="text" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Mobility</label>
          </div>
          <input type="text" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Oxygen Supplementation</label>
          </div>
          <input type="text" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Fluid intake</label>
          </div>
          <input type="text" />
        </div>

        <div className="">
          <div className=" block">
            <label htmlFor="patientid">Fluid output</label>
          </div>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default TakeNursingVitals;
