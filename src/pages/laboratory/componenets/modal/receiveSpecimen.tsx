import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import TextareaAutosize from "react-textarea-autosize";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/ui/accordion";

function ReceiveSpecimen({ selectedRowData, setReceiveComment, receiveComment }) {
  const { patientId, panelId, orderBy, comment } = selectedRowData;

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
            {comment && comment.length > 0 ? (
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
                          {formatDateTime(new Date(c.time))}
                        </span>
                      </div>
                    </div>
                    <hr className="mx-5 " />
                    <div className="px-10 py-2">
                      <span className="font-bold text-justify">
                        {c.text.charAt(0).toUpperCase() +
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
        <span className="font-bold">Add Comment</span>
        <TextareaAutosize
          minRows={3}
          placeholder="Write a comment"
          onChange={(e) => setReceiveComment(e.target.value)}
          className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
          value={receiveComment}
          maxRows={5}
        />
      </div>
    </>
  );
}

export default ReceiveSpecimen;
