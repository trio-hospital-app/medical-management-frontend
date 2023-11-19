import CustomLabHeader from "../../../../components/ui/labHeader/CustomLabHeader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import DynamicFormTable from "../../../../components/ui/dynamicFormTable/DynamicFormTable";
function TakeSpecimen() {
  const [formData, setFormData] = useState("");
  const [dynamicFormRows, setDynamicFormRows] = useState([]);

  const handleRowDataChange = (rowData:any) => {
    setDynamicFormRows(rowData);
  };
  console.log(dynamicFormRows);

  return (
    <>
      <div>
        <CustomLabHeader
          patientName="Mr. christopher Abraham"
          patientID="12345667778"
          testName="Full Blood Count"
          labID="12345667778"
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
          style={{
            backgroundColor: "#E8EBFF",
            overflowY: "scroll",
            maxHeight: "300px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold"> Previous Comments</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
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
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
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
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* fill form are  */}

      <div className="px-4">
        <div className="bg-ha-primary2 px-4 py-3 font-bold rounded-[.3rem]">
          <h1>Full Blood Count</h1>
        </div>
        <div>
          <DynamicFormTable onRowDataChange={handleRowDataChange} />
        </div>
      </div>

      <div className="px-4">
        <span className="font-bold">Add Comment</span>
        <TextareaAutosize
          minRows={3}
          placeholder="Write a comment"
          onChange={(e) => setFormData(e.target.value)}
          className={`w-[95%] p-5 text-justify rounded-[1rem] outline-none border border-black  mt-2 bg-ha-primary2 `}
          value={formData}
          maxRows={5}
        />
      </div>
    </>
  );
}

export default TakeSpecimen;
