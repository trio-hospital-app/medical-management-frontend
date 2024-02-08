import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { toast } from "react-toastify";
import Loader from "../../../../components/ui/loader";
import { useEffect } from "react";
import { useDeletePharmacy } from "../../../../hooks/reactQuery/usePharmacy";

const DeleteMedication = ({
  setDeleteDialogOpen,
  deleteDialogOpen,
  selectedRowData,
  setReload,
}) => {
  const {
    mutate,
    status: deleteStatus,
    isLoading: deleteLoading,
  } = useDeletePharmacy();


  useEffect(() => {
    if (deleteStatus === "success") {
      toast.success("Medication Deleted Successfully");
    }
  }, [deleteStatus]);

  const handleDelete = async () => {
    await mutate(selectedRowData?.id);
    setDeleteDialogOpen(false);
    setReload(true);
  };

  return (
    <div>
      {deleteLoading && <Loader />}
      <Dialog
        open={deleteDialogOpen}
        onOpenChange={(open) => setDeleteDialogOpen(open)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-500">
              Delete Medication
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="font-semibold">
            Are you sure you want to Delete this Medication? This action cannot
            be undone.
          </DialogDescription>
          <DialogDescription className="font-semibold"></DialogDescription>
          <div>
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-500"
            >
              Name:
            </label>
            <span id="name" className="text-ha-primary1 pl-1">
              {selectedRowData?.name}
            </span>
          </div>
          <div>
            <label
              htmlFor="medicationName"
              className="text-sm font-semibold text-gray-500"
            >
              Unit:{"     "}
            </label>
            <span id="name" className="text-ha-primary1 pl-1">
              {selectedRowData?.unit}
            </span>
          </div>
          <div>
            <label
              htmlFor="medicationName"
              className="text-sm font-semibold text-gray-500"
            >
              Form:{"     "}
            </label>
            <span id="name" className="text-ha-primary1 pl-1">
              {selectedRowData?.form}
            </span>
          </div>
          <div>
            <label
              htmlFor="medicationName"
              className="text-sm font-semibold text-gray-500"
            >
              Manufacturer:{"     "}
            </label>
            <span id="labID" className="text-ha-primary1 pl-1">
              {selectedRowData?.manufacturer}
            </span>
          </div>

          <div>
            <label
              htmlFor="medicationName"
              className="text-sm font-semibold text-gray-500"
            >
              Price:{"     "}
            </label>
            <span id="labID" className="text-ha-primary1 pl-1">
              {"₦" + selectedRowData?.price}
            </span>
          </div>

          <div>
            <label
              htmlFor="medicationName"
              className="text-sm font-semibold text-gray-500"
            >
              Quantity:{"     "}
            </label>
            <span id="labID" className="text-ha-primary1 pl-1">
              {selectedRowData?.quantity}
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

export default DeleteMedication;
