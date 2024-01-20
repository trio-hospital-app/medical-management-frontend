import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/ui/accordion";
import NewImagingOrder from './newRadiology'
import Loader from "../../../../components/ui/loader";
import { useAddRadiology, useGetPatientRadiology } from "../../../../hooks/reactQuery/useRadiology";
import { formatDate, formatDate1 } from "../../../../hooks/formattedDate";
import { IoMdPrint } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import BasicModal from "../../../../components/ui/modals/basicModal";
import { useState } from "react";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";

function RadiologyTable({ id, patientData}) {
  const { isLoading, data: patientRadiology, refetch } =   useGetPatientRadiology(id);
  const [newRadiologyModal, setNewRadiologyModal] = useState(false);
  const [selectScheme, setSelectedScheme] = useState('');
  const [selectRadiologyTest, setSelectRadiologyTest] = useState([]);
  const [formComment, setFormComment] = useState("");
  const [diagnosisComment, setDiagnosisComment] = useState("");
  const {
    mutate,
    status: addLabStatus,
    isLoading: NewRadiologyLoading,
  } = useAddRadiology();

  if (isLoading || NewRadiologyLoading) {
    return <Loader />;
  }

  if (addLabStatus === "success") {
    toast.success("Radiology order created successfully");
    refetch()
    mutate(null)
  }

  console.log(patientRadiology)
 
  const columns = [
    {
      name: "Order Date",
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
      with: "200px",
    },
    {
      name: "Radiology ID",
      selector: (row) => row.id,
      sortable: true,
      with: "200px",
    },
    {
      name: "Service Center",
      selector: (row) => row.centerId.center,
      sortable: true,
    },
    {
      name: "Ordered By",
      selector: (row) => `${row.orderBy.firstName} ${row.orderBy.lastName}`,
      sortable: true,
      with: "200px",
    },
    {
      cell: () => (
        <div className=" w-full flex justify-end items-center">
          <div className=" flex items-center gap-3">
            <IoMdPrint className="font-bold text-xl text-ha-primary1" />
            <FiSend className="font-bold text-xl text-green-600" />
          </div>
        </div>
      ),
      sortable: false,
    },
  ];


  const ExpandedComponent = ({ data }) => (
    <div className="relative">
      <div className="m-5 p-5 bg-black">
        <div className="w-full h-full grid grid-cols-4 bg-black text-white">
          <span className="w-full flex items-center justify-start">Observation</span>
          <span className="w-full flex items-center justify-start">Range</span>
          <span className="w-full flex items-center justify-start">Unit</span>
          <span className="w-full flex items-center justify-start">Value</span>
        </div></div>
      <div className="m-5 p-5 shadow text-black rounded-md">
        {data?.result.length > 0 ? data?.result?.map((el) => (
          <div className="w-full h-full grid grid-cols-4 p-2 border">
            <span className="w-full flex items-center justify-start">{el?.observation}</span>
            <span className="w-full flex items-center justify-start">{el?.range}</span>
            <span className="w-full flex items-center justify-start">{el?.unit}</span>
            <span className="w-full flex items-center justify-start">{el?.value}</span>
          </div>
        )):  <div className="flex items-center flex-col justify-center w-full h-[100px]">
        <img src="/empty-list.svg" alt="empty" className="w-[20%] h-[70%]" />
        <h3>Result yet to be filled </h3>
      </div>}
      </div>
      {data?.comment && <div className="m-5">
        <div className="flex items-center justify-end w-[50%]">
          <Accordion type="single" collapsible className="w-full p-5 bg-ha-primary2 rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger> Result Comments</AccordionTrigger>
              {data?.comment.map((el) => (
                el?.text && (
                  <AccordionContent key={el?.id}>
                    <div  className=" rounded w-full grid bg-white mb-2 p-2">
                    <div className="flex items-center justify-between ">
                      <span className="w-full flex items-center justify-start capitalize">
                        <span className="font-bold">By:</span> {el?.by?.firstName} {el?.by?.lastName}
                      </span>
                      <span className="w-full flex items-center justify-end font-bold">{formatDate1(el?.time)}</span>
                    </div>
                    <div className="flex items-center justify-start mt-2 capitalize font-bold">{el?.text}</div>
                    </div>
                  
                  </AccordionContent>
                )
              ))}

            </AccordionItem>
          </Accordion>
        </div>
      </div>}
    </div>
  );

  const handleCreateNewRadiologyOrder = async () => {
    const RadiologyData: any = {
      testArr: selectRadiologyTest,
      patientId: id,
      text: formComment,
      diagnosis: diagnosisComment,
      schemeId: selectScheme,
    };
    await mutate(RadiologyData);
    setNewRadiologyModal(false);
  };

  return (
    <div>
       <BasicModal
        title="New Imaging Order"
        setOpenModal={setNewRadiologyModal}
        openModal={newRadiologyModal}
        cancelTitle="Cancel"
        submitTitle="Save"
        showCancelButton={true}
        showSubmitButton={true}
        size="5xl"
        submitHandler={handleCreateNewRadiologyOrder}
      >
        <NewImagingOrder
          setSelectedScheme={setSelectedScheme}
          setSelectRadiologyTest={setSelectRadiologyTest}
          setFormComment={setFormComment}
          formComment={formComment}
          selectRadiologyTest={selectRadiologyTest}
          selectScheme={selectScheme}
          patientData={patientData}
          setDiagnosisComment={setDiagnosisComment}
          diagnosisComment={diagnosisComment}
        />
      </BasicModal>
      <div className="flex justify-end items-center ">
        <Button className="bg-ha-primary1 text-white" onClick={()=> setNewRadiologyModal(true)}>
          Order Radiology for Patient
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={patientRadiology.data.radiology || []}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default RadiologyTable;
