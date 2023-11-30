import { FaSearch } from "react-icons/fa";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";
import BasicModal from "../../../../components/ui/modals/basicModal";

function Specimen() {
  const [showCreate, setShowCreate] = useState(false);
  const handleClick = () => {
    setShowCreate(true);
  };
  return (
    <div className="w-full">
      {showCreate && (
        <BasicModal
          title="New Lab Specimen"
          setOpenModal={setShowCreate}
          cancelTitle="Cancel"
          openModal={showCreate}
          showCancelButton={true}
          submitTitle="Submit"
          showSubmitButton={true}
          submitHandler={() => {}}
        >
          <div className="grid">
            <label>Name Of Specimen e.g (Blood, Stool)</label>
            <input type="text" />
          </div>
          <div className="grid">
            <label>Description</label>
            <textarea rows={5} className="border rounded-lg" />
          </div>
        </BasicModal>
      )}
      <div className="w-full flex items-center justify-end border-y py-2 gap-2">
        <div className="relative w-[300px]">
          <input
            type="text"
            placeholder="Search by Name"
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaSearch className="text-gray-500" />
          </div>
        </div>
        <Button className="bg-ha-primary1 text-white" onClick={handleClick}>New Specimen</Button>
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
            <span>Edit Specimen </span>
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
            <span> Edit Specimen </span>
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
  );
}

export default Specimen;
