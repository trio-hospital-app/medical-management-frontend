import { Button } from "flowbite-react";

interface FilterHeaderProps {
  children: React.ReactNode;
  title: string;
  buttonTitle: string;
  resetFilter: () => void;
  search: () => void;
}

function FilterHeader({ children, title, buttonTitle, resetFilter, search }: FilterHeaderProps) {
  return (
    <div className="bg-white px-5 py-3 rounded-[1rem] shadow-lg">
      <div className="flex items-center justify-between pb-2 border-b">
        <span className="text-xl font-bold">{title}</span>
        <Button color="blue">{buttonTitle}</Button>
      </div>

      <div className="p-3">{children}</div>

      <div className="w-full pt-2 border-t">
        <div className="w-[25%] flex items-center justify-between">
          <span
            className="border border-red-500 rounded-[1rem] w-[49%] h-10 flex items-center justify-center font-bold text-red-500 cursor-pointer hover:bg-red-100"
            onClick={resetFilter}
          >
            Reset
          </span>
          <span
            className="border border-blue-500 rounded-[1rem] w-[49%] h-10 flex items-center justify-center font-bold text-blue-500 cursor-pointer hover:bg-blue-100"
            onClick={search}
          >
            Search
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
