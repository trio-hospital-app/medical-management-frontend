import { Dropdown } from "flowbite-react";
import DataTable from "react-data-table-component";
import { Button } from "../../../components/ui/button";
import { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddTask from "./modal/addTask";
import BasicModal from "../../../components/ui/modals/basicModal";
import { useState } from "react";
import MainSearchInput from "../../../components/ui/mainSearchInput";
import DoneTask from "./modal/doneTask";
import ScheduleTask from "./modal/scheduleTask";
interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  patientId: string | number;
  orderDate: string;
  imagingId: string | number;
  serviceCenter: string | number;
  patientName: string;
  instructions: string;
  status: string;
  orderBy?: string;
  date: string;
  createdBy: string;
  description: string;
  scheduledDate: string;
  scheduledBy: string;
  closeDate: string;
  performedBy: string;
}

function TaskTable() {
  const addTaskRef = useRef<any>(null);
  const [addTask, setAddTask] = useState(false);
  const [search, setSearch] = useState("");
  const [doneTaskmodal, setDoneTaskmodal] = useState(false);
  const [scheduleTaskmodal, setScheduleTaskmodal] = useState(false);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(search);
    }
  };

  // ref to call handleApiCall in AddTask
  const handleApiCallFromAddTask = () => {
    if (addTaskRef.current) {
      addTaskRef.current.handleApiCall();
    }
  };

  const handleApicallfromScheduleTask = () => {
    if (addTaskRef.current) {
      addTaskRef.current.handleSchduleSubmit();
    }
  };

  // modal save button handler
  const addTaskHandler = () => {
    console.log("add task");
    handleApiCallFromAddTask();
  };

  const scheduleTaskHandler = () => {
    console.log("schdule task");
    handleApicallfromScheduleTask();
  };

  const openAddTaskModal = () => {
    setAddTask(true);
    console.log("add task");
  };

  const handleRowDelete = (row: Patient) => {
    console.log(row);
  };

  const handleRowClick = (status: string) => {
    if (status === "Done") {
      setDoneTaskmodal(true);
      console.log("done");
    } else if (status === "Scheduled") {
      setScheduleTaskmodal(true);
      console.log("scheduled");
    }
  };

  const data: Patient[] = [
    {
      id: 1,
      firstName: "Sophie",
      lastName: "Harris",
      patientId: "1",
      orderDate: "2021-09-22",
      imagingId: "Lxyz987654",
      serviceCenter: "Radiology B",
      patientName: "Sophie Harris",
      instructions: "give patient 2 glasses of water before the test",
      status: "Scheduled",
      orderBy: "Dr. Christopher Johnson",
      date: "2021-09-22",
      createdBy: "Dr. Christopher Johnson",
      description: "Sample description 1",
      scheduledDate: "2021-09-22",
      scheduledBy: "Dr. Christopher Johnson",
      closeDate: "2021-09-23",
      performedBy: "Dr. Christopher Johnson",
    },
    {
      id: 2,
      firstName: "Mason",
      lastName: "Martin",
      patientId: "2",
      orderDate: "2023-11-17 13:02",
      imagingId: "Lpqr123456",
      serviceCenter: "CT Scan Center",
      patientName: "Mason Martin",
      instructions: "give patient 2 malaria tablets before the test",
      status: "Done",
      orderBy: "Dr. Elizabeth White",
      date: "2023-11-17",
      createdBy: "Dr. Elizabeth White",
      description: "Sample description 2",
      scheduledDate: "2021-09-22",
      scheduledBy: "Christoper Johnson",
      closeDate: "",
      performedBy: "",
    },
    {
      id: 3,
      firstName: "Sophie",
      lastName: "Harris",
      patientId: "1",
      orderDate: "2021-09-22",
      imagingId: "Lxyz987654",
      serviceCenter: "Radiology B",
      patientName: "Sophie Harris",
      instructions: "give patient 2 glasses of water before the test",
      status: "Scheduled",
      orderBy: "Dr. Christopher Johnson",
      date: "2021-09-22",
      createdBy: "Dr. Christopher Johnson",
      description: "Sample description 1",
      scheduledDate: "2021-09-22",
      scheduledBy: "Dr. Christopher Johnson",
      closeDate: "2021-09-23",
      performedBy: "Dr. Christopher Johnson",
    },
    {
      id: 4,
      firstName: "Sophie",
      lastName: "Harris",
      patientId: "1",
      orderDate: "2021-09-22",
      imagingId: "Lxyz987654",
      serviceCenter: "Radiology B",
      patientName: "Sophie Harris",
      instructions: "give patient 2 glasses of water before the test",
      status: "Done",
      orderBy: "Dr. Christopher Johnson",
      date: "2021-09-22",
      createdBy: "Dr. Christopher Johnson",
      description: "Sample description 1",
      scheduledDate: "2021-09-22",
      scheduledBy: "Dr. Christopher Johnson",
      closeDate: "2021-09-23",
      performedBy: "Dr. Christopher Johnson",
    },
  ];

  const columns: any = [
    {
      name: "Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.date}
        </div>
      ),
      selector: (row: Patient) => row.date,
      sortable: true,
      width: "full",
    },
    {
      name: "Created By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.createdBy}
        </div>
      ),
      selector: (row: Patient) => row.createdBy,
      sortable: true,
      width: "full",
    },
    {
      name: "Description",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.description}
        </div>
      ),
      selector: (row: Patient) => row.description,
      sortable: true,
      // grow: 3,
    },
    {
      name: "Scheduled Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.scheduledDate}
        </div>
      ),
      selector: (row: Patient) => row.scheduledDate,
      sortable: true,
      width: "9rem",
    },
    {
      name: "Scheduled By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.scheduledBy}
        </div>
      ),
      selector: (row: Patient) => row.scheduledBy,
      sortable: true,
      width: "full",
    },
    {
      name: "Close Date",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.closeDate}
        </div>
      ),
      selector: (row: Patient) => row.closeDate,
      sortable: true,
      width: "full",
    },
    {
      name: "Performed By",
      cell: (row: Patient) => (
        <div className="text-left" onClick={() => handleRowClick(row.status)}>
          {row.performedBy}
        </div>
      ),
      selector: (row: Patient) => row.performedBy,
      sortable: true,
      width: "full",
    },
    {
      name: "Status",
      cell: (row: Patient) => (
        <div className="w-full">
          <Button
            className={` text-white ${
              row.status === "Scheduled"
                ? "bg-purple-400 hover:bg-purple-500"
                : "bg-green-700 hover:bg-green-900"
            }`}
            onClick={() => handleRowClick(row.status)}
          >
            {row.status}
          </Button>
        </div>
      ),
      selector: (row: Patient) => row.status,
      sortable: true,
      width: "9rem",
    },
    {
      cell: (row: Patient) => (
        <div className=" w-full flex justify-end items-center">
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1">
            <Dropdown
              size="lg"
              arrowIcon={false}
              inline
              label={<BsThreeDotsVertical style={{ color: "black" }} />}
            >
              <Dropdown.Item onClick={() => handleRowDelete(row)}>
                Cancel
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
      sortable: false,
    },
  ];

  return (
    <>
      <div>
        <div className="border-b-2 shadow pb-5">
          <span className="font-bold text-ha-primary1 px-10 py-2">Tasks</span>
        </div>
        <div className="flex flex-col md:flex-row justify-end items-center gap-5 px-10 pt-5">
          <MainSearchInput
            value={search}
            placeholder="Search by Name"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <Button
            onClick={openAddTaskModal}
            className="hover:bg-blue-400 text-white bg-blue-500 w-[auto] mt-2"
          >
            Add Task
          </Button>
        </div>
      </div>
      <div className="rounded-[.5rem] px-10 bg-white shadow">
        <DataTable
          columns={columns}
          data={data}
          pointerOnHover={true}
          onRowClicked={(row) => {
            handleRowClick(row.status);
          }}
        />
      </div>
      <BasicModal
        title="Add Task"
        setOpenModal={setAddTask}
        cancelTitle="Cancel"
        openModal={addTask}
        showCancelButton={true}
        submitTitle="Save"
        showSubmitButton={true}
        submitHandler={addTaskHandler}
        size="5xl"
      >
        <AddTask ref={addTaskRef} />
      </BasicModal>

      <BasicModal
        title="View Task"
        setOpenModal={setDoneTaskmodal}
        cancelTitle="Cancel"
        openModal={doneTaskmodal}
        showCancelButton={true}
        showSubmitButton={false}
        submitTitle="Save"
        size="5xl"
      >
        <DoneTask />
      </BasicModal>

      <BasicModal
        title="Complete Task"
        setOpenModal={setScheduleTaskmodal}
        cancelTitle="Cancel"
        openModal={scheduleTaskmodal}
        showCancelButton={true}
        submitTitle="Mark as Done"
        showSubmitButton={true}
        submitHandler={scheduleTaskHandler}
        size="5xl"
      >
        <ScheduleTask ref={addTaskRef} />
      </BasicModal>
    </>
  );
}

export default TaskTable;
