import { useState } from "react";
import Designer from "../components/Designer";

function FormBuilder() {
  const [published, setPublished] = useState(true);
  return (
    <div className="fixed top-0 pt-[60px] bottom-0 left-0 right-0 bg-ha-secondary1 z-[59]">
      <main className="flex flex-col w-full h-full">
        <nav className="flex justify-between border-b-2 p-2 gap-3 items-center bg-blue-600 text-white">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            <span className="font-bold"> Name of Form</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="border py-1 px-5 rounded-[.5rem] cursor-pointer hover:bg-blue-500">
              <span></span>
              <span>Preview</span>
            </div>
            {published && (
              <>
                <div className="border py-1 px-5 rounded-[.5rem] cursor-pointer hover:bg-blue-500">
                  <span></span>
                  <span>Save</span>
                </div>
                <div className="border py-1 px-5 rounded-[.5rem] cursor-pointer hover:bg-blue-500">
                  <span></span>
                  <span>Publish</span>
                </div>
              </>
            )}
          </div>
        </nav>
        <div className="flex w-fullflex-grow items-center justify-center relative overflow-y-auto h-full bg-accent bg-[url(/assets/paper.svg)] dark:bg-[url(/assets/paper-dark.svg)]">
          <Designer />
        </div>
      </main>
    </div>
  );
}

export default FormBuilder;
