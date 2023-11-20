import { Button } from "../button";

interface FilterHeaderProps {
  children: React.ReactNode;
  title: string;
  buttonTitle: string;
  resetFilter: () => void;
  search: () => void;
  handleCreate: () => void;
}

function FilterHeader({
  children,
  title,
  buttonTitle,
  resetFilter,
  search,
  handleCreate,
}: FilterHeaderProps) {
  return (
    <div className="bg-white px-10 py-4 rounded-[.5rem] shadow mb-5">
      <div className="flex flex-col md:flex-row items-center justify-between pb-1 border-b">
        <span className="text-xl font-bold">{title}</span>
        <Button
          onClick={handleCreate}
          className="bg-ha-primary1 text-white  hover:bg-blue-900"
        >
          {buttonTitle}
        </Button>
      </div>

      <div className="py-3">{children}</div>

      <div className="w-full pt-2 border-t">
        <div className="md:w-[20%] w-full flex flex-col md:flex-row items-center justify-start gap-10">
          <Button
            onClick={resetFilter}
            className="text-red-500 hover:bg-red-100 border border-red-300"
          >
            Reset
          </Button>
          <Button
            onClick={search}
            className="text-ha-primary1 hover:bg-blue-100 border border-blue-300"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterHeader;
