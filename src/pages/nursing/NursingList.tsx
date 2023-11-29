import CustomPatientCard from "../../components/ui/customPatientCard/customPatientCard";

const NursingList = () => {
  return (
    <div>
      <div>
        <CustomPatientCard
          patientName="Mr. Christopher Abraham"
          patientID="12345667778"
          patientEmail="Christopherabraham8@gmail.com"
          imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          gender="Male"
          phoneNumber="12345667778"
          religion="Christian"
          nationality="Nigeria"
          maritalStatus="Single"
          age="32 years"
          layout={2}
        />
      </div>
    </div>
  );
};

export default NursingList;
