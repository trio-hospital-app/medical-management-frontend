import LabHeader from "../../../../components/ui/labHeader/labHeader";

function TakeSpecimen() {
  return (
    <>
      <div>
        <LabHeader
          patientName="Mr. Fredrick Luguard"
          patientID="12345667778"
          testName="Full Blood Count"
          labID="12345667778"
          gender="Male"
          phoneNumber="12345667778"
          religion="Christian"
          nationality="Nigeria"
          maritalStatus="Single"
          age="32 years"
          orderedBy="Dr. Alexander Ifeanyichukwu"
          orderedDate="23-04-2023 (9:10 am UTC)"
          testNameBackgroundColor="bg-green-700"
        />
      </div>
    </>
  );
}

export default TakeSpecimen;
