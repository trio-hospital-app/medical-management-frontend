import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";
import Loader from "../../../../components/ui/loader";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Tooltip } from "flowbite-react";
import BasicModal from "../../../../components/ui/modals/basicModal";
import EditPharmacy from "./EditPharmacy";
import { useGetPharmacy, useUpdatePharmacy } from "../../../../hooks/reactQuery/usePharmacy";
import DeleteMedication from "./DeleteMedication";

function pharmacyTable({reload, setReload}) {

  const [showEditMedication, setShowEditMedication] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState("");
  const { data: Pharmacy, refetch, isLoading: loadingPharmacy } = useGetPharmacy();
  const { mutate: editMedication, status, isLoading  } = useUpdatePharmacy();

  useEffect(() => {
    if (status === "success") {
      toast.success("Medication Updated Successfully");
      setReload(true);
    }
  }, [status]);



  const [formData, setFormData] = useState<PharmacyFormData>({
    name: "",
    manufacturer: "",
    description: "",
    quantity: 0,
    price: 0,
    unit: "",
    form: [], // Initialize as an array
  });
  
  interface PharmacyFormData {
    name: string;
    manufacturer: string;
    description: string;
    quantity: number;
    price: number;
    unit: string;
    form: any;
  }


    if (reload){
      refetch()
    }

  const openEdit = (row) => {
    setSelectedRowId(row.id);
    const priceWithoutCommas = row.price.replace(/,/g, ''); 
    const priceNumber = parseFloat(priceWithoutCommas);
    setFormData({
      name: row.name,
      manufacturer: row.manufacturer,
      description: row.description,
      quantity: row.quantity,
      price: priceNumber,
      unit: row.unit,
      form: row.form,
    });
    setShowEditMedication(true);
  };
  
  

  const openDelete = (row) => {
    setDeleteDialogOpen(true)
    setSelectedRowData(row)
  }

  const handleEditSubmit = async  () => {
    const formattedData = {
      name: formData.name,
      manufacturer: formData.manufacturer,
      description: formData.description,
      quantity: formData.quantity,
      price: formData.price,
      unit: formData.unit,
      form: Array.isArray(formData.form)
        ? formData.form.join(", ")
        : formData.form,
    };
    const id = selectedRowId;

    const Updatedata = {
          id: id, 
          data: formattedData,
        };

    await editMedication( Updatedata);
    setShowEditMedication(false);
  };


  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#ffff",
        text: "bold",
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        minHeight: "56px",
        textTransform: "capitalize",
        cursor: "default",
      },
    },
  };

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Manufacturer",
      selector: "manufacturer",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
    },
    {
      name: "Quantity",
      selector: "quantity",
      sortable: true,
    },
    {
      name: "Price (Naira)",
      selector: "price",
      sortable: true,
      cell: (row) => `₦${row.price}`,
    },
    {
      name: "Unit",
      selector: "unit",
      sortable: true,
    },
    {
      name: "Medication Form",
      selector: "form",
      sortable: true,
    }, 
    {
      name: "Actions",
      cell: (row) => (
        <div className="w-full flex justify-around items-center">
          <Tooltip content="Edit Medication">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1" onClick={() => openEdit(row)}>
           <FaPen style={{ color: "black" }} />
          </div>
          </Tooltip>
          <Tooltip content="Delete Medication">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-ha-secondary1" onClick={() => openDelete(row)}>
           <RiDeleteBin2Fill style={{ color: "red" }} />
          {/* </div> */}
        </div>
        </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
     {isLoading && <Loader />}
     {loadingPharmacy && <Loader />}
    <div className="w-full">
      <div className="border-b py-2 flex items-center justify-end">
        <div className="relative w-[300px]">
          <input
            type="text"
            placeholder="Search Medication"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none hover:bg-black cursor-pointer">
            <FaSearch className="text-gray-500 " />
          </div>
        </div>
      </div>
      {/* @ts-expect-error: Just ignore the next line */}
      <DataTable columns={columns} data={Pharmacy?.data} customStyles={customStyles} />
    </div>

    <DeleteMedication
        setDeleteDialogOpen={setDeleteDialogOpen}
        deleteDialogOpen={deleteDialogOpen}
        selectedRowData={selectedRowData}
        setReload={setReload}
      />
    <BasicModal
        title="Edit Medication"
        setOpenModal={setShowEditMedication}
        cancelTitle="Cancel"
        openModal={showEditMedication}
        showCancelButton={true}
        submitTitle="Submit"
        showSubmitButton={true}
        size="3xl"
        submitHandler={() => handleEditSubmit()}
      >
        <EditPharmacy setFormData={setFormData} formData={formData} />
      </BasicModal>
    </>
  );
}

export default pharmacyTable;
