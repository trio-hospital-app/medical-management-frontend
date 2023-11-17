import { Button } from "flowbite-react";

const Header = () => {
  const addNewOrderHanlder = () => {
    console.log("Add new order");
  };
  return (
    <div className=" flex md:flex-row flex-col justify-between items-center px-5">
      <h2 className="font-bold text-[20px]">LABORATORY</h2>
      <Button color="blue" className="mt-2" onClick={addNewOrderHanlder}>
        New lab Order
      </Button>
    </div>
  );
};

export default Header;
