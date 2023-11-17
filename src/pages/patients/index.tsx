import FilterHeader from "../../components/ui/filterheaders/filterHeader";

function Patients() {
  return (
    <div className="Patients">
      <FilterHeader title="Patient Records" buttonTitle="Create New Patient">
        <form className="flex flex-wrap gap-2 justify-between">
          <input
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="w-[24%]"
          />
          <input
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="w-[24%]"
          />
          <input
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="w-[24%]"
          />
          <input
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="w-[24%]"
          />
          <input
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            className="w-[24%]"
          />
        </form>
      </FilterHeader>
      
    </div>
  );
}

export default Patients;
