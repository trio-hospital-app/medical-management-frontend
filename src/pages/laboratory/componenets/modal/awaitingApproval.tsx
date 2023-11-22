import CustomLabHeader from "../../../../components/ui/customPatientCard/customPatientCard";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/ui/accordion";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Button } from "../../../../components/ui/button";

function AwaitingApproval() {
  const [formData, setFormData] = useState("");
  const [openCommenTextArea, setOpenCommenTextArea] = useState(false);

  const tests = [
    {
      testName: "Full Blood Count",
      testNameBackgroundColor: "bg-green-700",
    },
  ];

  return (
    <>
      <div>
        <CustomLabHeader
          patientName="Mr. christopher Abraham"
          patientID="12345667778"
          tests={tests}
          IdName="Lab ID"
          labID="12345667778"
          patientEmail="Christopherabraham8@gmail.com"
          imgSrc="https://cdn-icons-png.flaticon.com/512/666/666201.png"
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
            <AccordionContent>
              <div className="bg-gray-300 py-3 rounded-[1rem]">
                <div className="px-10 py-2 flex items-start justify-between gap-5 flex-col md:flex-row ">
                  <div className="flex items-start justify-center flex-col">
                    <span className="text-sm font-sm text-gray-500">By:</span>
                    <span className="font-bold capitalize">
                      christopher Abraham
                    </span>
                  </div>
                  <div className="flex items-start justify-center flex-col">
                    <span className="text-sm font-sm text-gray-500">Date:</span>
                    <span className="font-bold">23-04-2023 (9:10 am UTC)</span>
                  </div>
                </div>
                <hr className="mx-5 " />
                <div className="px-10 py-2">
                  <span className="font-bold text-justify capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum? wkfslkhjflskfljskjf;skldjfd
                  </span>
                </div>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className="bg-gray-300 py-3 rounded-[1rem]">
                <div className="px-10 py-2 flex items-start justify-between gap-5 flex-col md:flex-row ">
                  <div className="flex items-start justify-center flex-col">
                    <span className="text-sm font-sm text-gray-500">By:</span>
                    <span className="font-bold capitalize">
                      christopher Abraham
                    </span>
                  </div>
                  <div className="flex items-start justify-center flex-col">
                    <span className="text-sm font-sm text-gray-500">Date:</span>
                    <span className="font-bold">23-04-2023 (9:10 am UTC)</span>
                  </div>
                </div>
                <hr className="mx-5 " />
                <div className="px-10 py-2">
                  <span className="font-bold text-justify capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum? wkfslkhjflskfljskjf;skldjfd
                  </span>
                </div>
              </div>
            </AccordionContent>
            <AccordionContent>
              <div className="bg-gray-300 py-3 rounded-[1rem]">
                <div className="px-10 py-2 flex items-start justify-between gap-5 flex-col md:flex-row ">
                  <div className="flex items-start justify-center flex-col">
                    <span className="text-sm font-sm text-gray-500">By:</span>
                    <span className="font-bold capitalize">
                      christopher Abraham
                    </span>
                  </div>
                  <div className="flex items-start justify-center flex-col">
                    <span className="text-sm font-sm text-gray-500">Date:</span>
                    <span className="font-bold">23-04-2023 (9:10 am UTC)</span>
                  </div>
                </div>
                <hr className="mx-5 " />
                <div className="px-10 py-2">
                  <span className="font-bold text-justify capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum? wkfslkhjflskfljskjf;skldjfd
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* fill form are  */}

      <div className="px-4">
        <div className="bg-ha-primary2 px-4 py-4 mb-3 font-bold rounded-[.3rem]">
          <h1>Full Blood Count</h1>
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
              <tr className="font-semibold">
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Full Blood Count
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  19
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  3090
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  456 - 70
                </td>
              </tr>
              <tr className="font-semibold">
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Full Blood Count
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  19
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  3090
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  456 - 70
                </td>
              </tr>
              <tr className="font-semibold">
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Full Blood Count
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  19
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  3090
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  456 - 70
                </td>
              </tr>
              <tr className="font-semibold">
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  Full Blood Count
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  19
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  3090
                </td>
                <td
                  className="pl-4"
                  style={{ borderBottom: "1px solid black" }}
                >
                  456 - 70
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4">
        <span className="font-bold mx-3">Comment</span>
        <div>
          <div className="bg-gray-300 py-3 mb-3 rounded-[1rem]">
            <div className="px-10 py-2 flex items-start justify-between gap-5 flex-col md:flex-row ">
              <div className="flex items-start justify-center flex-col">
                <span className="text-sm font-sm text-gray-500">By:</span>
                <span className="font-bold capitalize">
                  christopher Abraham
                </span>
              </div>
              <div className="flex items-start justify-center flex-col">
                <span className="text-sm font-sm text-gray-500">Date:</span>
                <span className="font-bold">23-04-2023 (9:10 am UTC)</span>
              </div>
            </div>
            <hr className="mx-5 " />
            <div className="px-10 py-2">
              <span className="font-bold text-justify capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum? wkfslkhjflskfljskjf;skldjfd
              </span>
            </div>
          </div>
          <div className="bg-gray-300 py-3 rounded-[1rem]">
            <div className="px-10 py-2 flex items-start justify-between gap-5 flex-col md:flex-row ">
              <div className="flex items-start justify-center flex-col">
                <span className="text-sm font-sm text-gray-500">By:</span>
                <span className="font-bold capitalize">
                  christopher Abraham
                </span>
              </div>
              <div className="flex items-start justify-center flex-col">
                <span className="text-sm font-sm text-gray-500">Date:</span>
                <span className="font-bold">23-04-2023 (9:10 am UTC)</span>
              </div>
            </div>
            <hr className="mx-5 " />
            <div className="px-10 py-2">
              <span className="font-bold text-justify capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum? wkfslkhjflskfljskjf;skldjfd
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-7">
        <div className=" flex items-center justify-start gap-3">
          <span className="font-bold text-ha-primary1">Add Comment</span>
          <Button
            onClick={() => setOpenCommenTextArea(!openCommenTextArea)}
            className="bg-blue-100 hover:bg-blue-200"
          >
            <BsFillPencilFill />
          </Button>
        </div>
        {openCommenTextArea && (
          <TextareaAutosize
            minRows={3}
            placeholder="Write a comment"
            onChange={(e) => setFormData(e.target.value)}
            className={`w-[100%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
            value={formData}
            maxRows={5}
          />
        )}
      </div>
    </>
  );
}

export default AwaitingApproval;
