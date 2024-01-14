import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { useDeleteLab } from "../../../../hooks/reactQuery/useLabs";
import { toast } from "react-toastify";
import Loader from "../../../../components/ui/loader";

const CancelLabOrder = ({
  setDeleteDialogOpen,
  deleteDialogOpen,
  selectedRowData,
  setReload
}) => {
  const {
    mutate,
    status: deleteStatus,
    isLoading: deleteLoading,
  } = useDeleteLab();

  if (deleteLoading) {
    return <Loader />;
  }

  if (deleteStatus === "success") {
    toast.success("Lab order deleted successfully");
  }
  const handleDelete = async () => {
    await mutate(selectedRowData.id);
    setDeleteDialogOpen(false);
    setReload(true)
  };

  return (
    <div>
      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => setDeleteDialogOpen(open)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">Cancel Lab Order</DialogTitle>
          </DialogHeader>
          <DialogDescription className="font-semibold">
            Are you sure you want to cancel this lab order? This action cannot
            be undone.
          </DialogDescription>
          <DialogDescription className="font-semibold"></DialogDescription>
          <span className="md:text-xl font-bold text-bold capitalize">
            {selectedRowData?.patientId?.firstName}{" "}
            {selectedRowData?.patientId?.lastName}
          </span>
          <div>
            <label
              htmlFor="labID"
              className="text-sm font-semibold text-gray-500"
            >
              Paitent ID:
            </label>
            <span id="labID" className="text-ha-primary1 pl-1">
              {selectedRowData?.patientId?.patientId}
            </span>
          </div>
          <div>
            <label
              htmlFor="labID"
              className="text-sm font-semibold text-gray-500"
            >
              Lab Test:{"     "}
            </label>
            <span
              className={`md:text-xl font-bold text-bold px-3 rounded-[1rem] py-1 text-center my-1 capitalize`}
              style={{
                backgroundColor:
                  selectedRowData.panelId?.specimenId.color || "white",
              }}
            >
              {selectedRowData.panelId?.panel || "Not Found"}
            </span>
          </div>

          <DialogFooter>
            <Button
              className=" text-white  bg-red-500 hover:bg-red-400 w-[auto] "
              onClick={() => setDeleteDialogOpen(false)}
            >
              NO
            </Button>
            <Button
              onClick={handleDelete}
              className="hover:bg-blue-400 text-white bg-blue-500 w-[auto]"
            >
              YES
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CancelLabOrder;
