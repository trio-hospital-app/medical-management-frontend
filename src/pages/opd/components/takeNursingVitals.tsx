function TakeNursingVitals({ consultation, formData, setFormData }) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form className="p-10 grid md:grid-cols-4 gap-2">
        <div className="">
          <div className="block">
            <label htmlFor="timeTaken">Time Taken</label>
          </div>
          <input
            type="date"
            id="timeTaken"
            name="timeTaken"
            value={formData.timeTaken}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="weight">Weight (kg)</label>
          </div>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="height">Height (cm)</label>
          </div>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="bmi">BMI (kg/m2)</label>
          </div>
          <input
            type="number"
            id="bmi"
            name="bmi"
            value={formData.bmi}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="systolicBP">Systolic B.P</label>
          </div>
          <input
            type="number"
            id="systolicBP"
            name="systolicBP"
            value={formData.systolicBP}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="diastolicBP">Diastolic B.P</label>
          </div>
          <input
            type="number"
            id="diastolicBP"
            name="diastolicBP"
            value={formData.diastolicBP}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="temperature">Temperature °C</label>
          </div>
          <input
            type="number"
            id="temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="respiratoryRate">Respiratory Rate (/min)</label>
          </div>
          <input
            type="number"
            id="respiratoryRate"
            name="respiratoryRate"
            value={formData.respiratoryRate}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="heartRate">Heart Rate (BPM)</label>
          </div>
          <input
            type="number"
            id="heartRate"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="urineOutput">Urine Output</label>
          </div>
          <input
            type="number"
            id="urineOutput"
            name="urineOutput"
            value={formData.urineOutput}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="bloodSugarF">Blood Sugar (F)</label>
          </div>
          <input
            type="number"
            id="bloodSugarF"
            name="bloodSugarF"
            value={formData.block}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="bloodSugarR">Blood Sugar (R)</label>
          </div>
          <input
            type="number"
            id="bloodSugarR"
            name="bloodSugarR"
            value={formData.bloodSugarR}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="spo2">SPO2</label>
          </div>
          <input
            type="number"
            id="spo2"
            name="spo2"
            value={formData.spo2}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="avpu">AVPU</label>
          </div>
          <input
            type="text"
            id="avpu"
            name="avpu"
            value={formData.avpu}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="trauma">Trauma</label>
          </div>
          <input
            type="text"
            id="trauma"
            name="trauma"
            value={formData.trauma}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="mobility">Mobility</label>
          </div>
          <input
            type="text"
            id="mobility"
            name="mobility"
            value={formData.mobility}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="oxygenSupplementation">
              Oxygen Supplementation
            </label>
          </div>
          <input
            type="text"
            id="oxygenSupplementation"
            name="oxygenSupplementation"
            value={formData.oxygenSupplementation}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="fluidIntake">Fluid intake</label>
          </div>
          <input
            type="text"
            id="fluidIntake"
            name="fluidIntake"
            value={formData.fluidIntake}
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <div className="block">
            <label htmlFor="fluidOutput">Fluid output</label>
          </div>
          <input
            type="text"
            id="fluidOutput"
            name="fluidOutput"
            value={formData.fluidOutput}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default TakeNursingVitals;
