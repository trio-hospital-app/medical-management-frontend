import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/ui/accordion";
import QuilEditor from "../QuilEditor";

function AwaitingImagingReport({setQuillData, selectedRowData }) {
  const { patientId, testId, orderBy, comment } = selectedRowData;

  //function for date and time format
  function formatDateTime(inputDate) {
    const originalDate = new Date(inputDate);

    // Create an options object with the desired date and time format
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-GB", options).format(originalDate);
  }
  // date and time usage
  const orderedDate = formatDateTime(selectedRowData.createdAt);

  // here is where i work on the quill data
  const updateQuillData = (data: any) => {
    setQuillData(data);
  };

  return (
    <>
      <div>
        <CustomLabHeader
          patientName={`${patientId?.salutation} ${patientId?.firstName} ${patientId?.middleName} ${patientId?.lastName}`}
          patientID={`${patientId?.patientId}`}
          testName={testId?.test || "Not Found"}
          testNameBackgroundColor={"#22C55D"}
          patientEmail={`${patientId?.address.email} `}
          imgSrc={patientId?.address?.image}
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
      {/* accordion */}
      <div className="px-4 max-h-[300px] overflow-y-scroll">
        <Accordion
          collapsible
          type="single"
          className="bg-ha-primary2 px-4 rounded-[.3rem]"
        >
          <AccordionItem className="AccordionItem" value="item-1">
            <AccordionTrigger>
              <h1 className="text-ha-primary1"> Previous Comments</h1>
            </AccordionTrigger>
            {comment && comment?.length > 0 ? (
              comment?.map((c, index) => (
                <AccordionContent key={index}>
                  <div className="bg-gray-300 py-3 rounded-[1rem]">
                    <div className="px-10 py-2 flex items-start justify-between gap-5 flex-col md:flex-row ">
                      <div className="flex items-start justify-center flex-col">
                        <span className="text-sm font-sm text-gray-500">
                          By:
                        </span>
                        <span className="font-bold capitalize">
                          {c.by.firstName} {c.by.lastName}
                        </span>
                      </div>
                      <div className="flex items-start justify-center flex-col">
                        <span className="text-sm font-sm text-gray-500">
                          Date:
                        </span>
                        <span className="font-bold">
                          {formatDateTime(new Date(c?.time))}
                        </span>
                      </div>
                    </div>
                    <hr className="mx-5 " />
                    <div className="px-10 py-2">
                      <span className="font-bold text-justify">
                        {c?.text.charAt(0).toUpperCase() +
                          c.text.slice(1).toLowerCase()}
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              ))
            ) : (
              <AccordionContent>
                <div>No comments available</div>
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-4">
        <label htmlFor="quill" className="text-ha-primary1 font-bold text-2xl my-5">
          Add Report
        </label>
        <QuilEditor updateQuillData={updateQuillData}/>
      </div>
    </>
  );
}

export default AwaitingImagingReport;
