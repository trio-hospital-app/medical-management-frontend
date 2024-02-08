import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import PharmacyTable from "./components/pharmacyTable";
import BasicModal from "../../../components/ui/modals/basicModal";
import Loader from "../../../components/ui/loader";
import { toast } from "react-toastify";
import AddPharmacy from "./components/AddPharmacy";
import { useAddPharmacy } from "../../../hooks/reactQuery/usePharmacy";

function Pharmacy() {
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [reload, setReload] = useState(false);
  const [formData, setFormData] = useState<PharmacyFormData>({
    name: "",
    manufacturer: "",
    description: "",
    quantity: 0,
    price: 0,
    unit: "",
    form: "",
  });
  interface PharmacyFormData {
    name: string;
    manufacturer: string;
    description: string;
    quantity: number;
    price: number;
    unit: string;
    form: string;
  }

  const { mutate, isLoading, status } = useAddPharmacy();

  useEffect(() => {
    if (status === "success") {
      toast.success("Medication Added Successfully");
      setReload(true);
    }
  }, [status]);

  const handleSubmit = async () => {
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

    await mutate(formattedData);
    setShowAddMedication(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <BasicModal
        title="Add Medication"
        setOpenModal={setShowAddMedication}
        cancelTitle="Cancel"
        openModal={showAddMedication}
        showCancelButton={true}
        submitTitle="Submit"
        showSubmitButton={true}
        size="3xl"
        submitHandler={() => handleSubmit()}
      >
        <AddPharmacy setFormData={setFormData} />
      </BasicModal>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">Pharmacy Management</h1>
        <Button
          className="bg-ha-primary1 text-white hover:bg-blue-600"
          onClick={() => setShowAddMedication(true)}
        >
          Add Medication
        </Button>
      </div>
      <div className="px-5 py-2 flex items-center mt-5 bg-white rounded-lg">
        <PharmacyTable reload={reload} setReload={setReload} />
      </div>
    </div>
  );
}

export default Pharmacy;
