import { useNavigate } from "react-router-dom";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

function Forms() {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/settings/forms/1");
  };

  return (
    <DndContext sensors={sensors}>
      <div className="">
        <div className="bg-white rounded-[.5rem] py-2 px-5 flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold">Your Forms</h1>
          <span
            className="border bg-ha-primary1 rounded-[1rem] w-[auto] py-2 px-4 flex items-center justify-center font-bold text-white cursor-pointer hover:bg-blue-600"
            // onClick={handleCreate}
          >
            Create New form
          </span>
        </div>
        <div className="bg-white rounded-[.5rem] py-5 px-5 grid md:grid-cols-3 gap-2">
          <div className="border px-5 py-3 h-[200px] rounded-[1rem] grid gap-3">
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <div
              className="w-full flex items-center justify-center bg-gray-500 rounded-[.5rem] text-white hover:bg-gray-600 cursor-pointer"
              onClick={handleClick}
            >
              <span> Edit Form </span>
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="border px-5 py-3 h-[200px] rounded-[1rem] grid gap-3">
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <div
              className="w-full flex items-center justify-center bg-gray-500 rounded-[.5rem] text-white hover:bg-gray-600 cursor-pointer"
              onClick={handleClick}
            >
              <span> Edit Form </span>
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default Forms;
