import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import Loader from "../../../../components/ui/loader";
import { useGetLabById } from "../../../../hooks/reactQuery/useLabs";
function FinalResult({ selectedRowData }) {
  const { patientId, panelId, orderBy } = selectedRowData;
  const id = selectedRowData?.id;

  const { data, isLoading } = useGetLabById(id);

  const result = data?.data?.result || [];

  //function for date and time format
  function formatDateTime(inputDate) {
    const originalDate = new Date(inputDate);
    // Create an options object with the desired date and time format
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(originalDate);
  }

  // date and time usage
  const orderedDate = formatDateTime(selectedRowData?.createdAt);

  const renderObservations = () => {
    if (!result || !result || result.length === 0) {
      return (
        <tr>
          <td>No observations found.</td>
        </tr>
      );
    }

    return result?.map((item) => (
      <tr key={item.id}>
        <td className="pl-4">{item.observation}</td>
        <td className="pl-4">{item.unit}</td>
        <td className="pl-4">{item.value}</td>
        <td className="pl-4">{item.range}</td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <CustomLabHeader
          patientName={`${patientId?.salutation} ${patientId?.firstName} ${patientId?.middleName} ${patientId?.lastName}`}
          patientID={`${patientId?.patientId}`}
          testName={panelId?.panel || "Not Found"}
          testNameBackgroundColor={`${panelId?.specimenId.color}`}
          labID={`${selectedRowData?.id}`}
          IdName="Lab ID"
          patientEmail={`${patientId?.address.email} `}
          imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          gender={`${patientId?.gender}`}
          phoneNumber={`${patientId?.phone}`}
          religion={`${patientId?.address?.religion}`}
          nationality={`${patientId?.address.country}`}
          maritalStatus={`${patientId?.address?.maritalStatus}`}
          age={patientId?.address?.dob ? patientId?.address?.dob : "Not Found"}
          orderedBy={`${orderBy?.firstName} ${orderBy?.lastName}`}
          orderedDate={orderedDate}
        />
      </div>

      {/* fill form are  */}

      <div className="px-4 border py-4 shadow">
        <div
          className={`px-4 py-4 font-bold rounded-[.3rem]`}
          style={{
            backgroundColor: panelId?.specimenId.color || "white",
          }}
        >
          <h1 className="capitalize font-extrabold text-2xl">
            {panelId?.panel}
          </h1>
        </div>
        <div>
          <table
            className="w-full border rounded-[.3rem] text-left"
            style={{ borderCollapse: "separate", borderSpacing: "0 1rem" }}
          >
            <tbody>
              <tr className="text-ha-primary1">
                <th
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Observation
                </th>
                <th
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Unit
                </th>
                <th
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Value
                </th>
                <th
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  References Range
                </th>
              </tr>
              {isLoading && <Loader />}

              {renderObservations()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FinalResult;
