import DesignerSidebar from "./DesignerSidebar";

function Designer() {
  return (
    <div className="flex w-full h-full">
      <div className="p-4 w-full">
        <div className="bg-gray-700 max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto ring-4 ring-primary ring-inset">
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
            Drop here
          </p>
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
}
export default Designer;
