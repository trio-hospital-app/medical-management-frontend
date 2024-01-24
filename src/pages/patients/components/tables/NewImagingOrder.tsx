
import CustomMultiSelect from "../../../../components/ui/inputSelect/inputSelect";
import TextareaAutosize from "react-textarea-autosize";
import { useGetRadiologyObservation } from "../../../../hooks/reactQuery/useRadiology";
import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";

const NewRadiologyOrder = ({
  setSelectedScheme,
  setSelectRadiologyTest,
  setFormComment,
  formComment,
  selectRadiologyTest,
  selectScheme,
  setDiagnosisComment,
  diagnosisComment,
  patientData
}) => {


  const { data: radiologyTestData } = useGetRadiologyObservation();

 

  // drop down data
  const schemes = patientData?.schemeId || [];
  const radiologyTest = radiologyTestData?.data || [];

  const handleSchemeChange = (selectedItems: any) => {
    setSelectedScheme(selectedItems);
  };

  const handleObservationChange = (selectedItems: any) => {
    setSelectRadiologyTest(selectedItems);
  };

  return (
    <div>
      <>
      <CustomLabHeader
          patientName={`${patientData?.firstName} ${patientData?.lastName}`}
          patientID={patientData?.patientId}
          patientEmail={patientData?.address?.email}
          imgSrc={patientData?.address?.image}
          gender={patientData?.gender}
          phoneNumber={patientData?.phone}
          religion={patientData?.address?.religion}
          nationality={patientData?.address?.country}
          maritalStatus={patientData?.address?.maritalStatus}
          age={patientData?.address?.dob}
          showOrdered={false}
        />
        <div className="flex flex-col justify-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-between pt-5">
            <div className="mb-2 w-[48%]">
              <label className="text-sm font-semibold text-ha-primary1">
                Scheme
              </label>
              <CustomMultiSelect
                options={schemes?.map((scheme) => ({
                  label: scheme.name,
                  value: scheme.id,
                }))}
                labelledBy="Scheme"
                onSelectChange={handleSchemeChange}
                value={(Array?.isArray(selectScheme) ? selectScheme : []).map(
                  (item) => item.id
                )}
                isMultiSelect={false}
                placeholder="Scheme"
                key="scheme"
              />
            </div>
            <div className="mb-2 w-[48%]">
              <label className="text-sm font-semibold text-ha-primary1">
                Observation
              </label>
              <CustomMultiSelect
                options={radiologyTest.map((item) => ({
                  label: item.test,
                  value: item.id,
                }))}
                labelledBy="Select Observation"
                onSelectChange={handleObservationChange}
                value={(Array?.isArray(selectRadiologyTest)
                  ? selectRadiologyTest
                  : []
                ).map((item) => item.id)}
                placeholder="Select Observation"
              />
            </div>
          </div>
          <div className="mb-2 pt-5">
            <label className="text-sm font-semibold text-ha-primary1">
              Diagnosis
            </label>
            <TextareaAutosize
              minRows={3}
              placeholder="Write a diagnosis"
              onChange={(e) => setDiagnosisComment(e.target.value)}
              className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
              value={diagnosisComment}
              maxRows={4}
              required
            />
          </div>
          <div className="mb-2 pt-5">
            <label className="text-sm font-semibold text-ha-primary1">
              Comment
            </label>
            <TextareaAutosize
              minRows={3}
              placeholder="Write a Comment"
              onChange={(e) => setFormComment(e.target.value)}
              className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
              value={formComment}
              maxRows={4}
              required
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default NewRadiologyOrder;
