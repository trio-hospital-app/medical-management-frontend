import DataTable from "react-data-table-component";
import { IoMdPrint } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/ui/accordion";
import { useGetPatientLab } from "../../../../hooks/reactQuery/useLabs";
import Loader from "../../../../components/ui/loader";
import { formatDate } from "../../../../hooks/formattedDate";

function LabTable({ id }) {
  const { isLoading, data: patientLab } = useGetPatientLab(id);
  console.log(patientLab, "patientLab");

  if (isLoading) {
    return <Loader />;
  }

  const columns = [
    {
      name: "Order Date",
      selector: (row) => formatDate(row.createdAt),
      sortable: true,
      with: "200px",
    },
    {
      name: "Lab ID",
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

  const ExpandedComponent = () => (
    <div className="m-5 p-5 shadow rounded-md">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Hi</AccordionTrigger>
          <AccordionContent> I am a content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Hi</AccordionTrigger>
          <AccordionContent> I am a content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4x">
          <AccordionTrigger>Hi</AccordionTrigger>
          <AccordionContent> I am a content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Hi</AccordionTrigger>
          <AccordionContent> I am a content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={patientLab ? patientLab.data.labs : []}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
}

export default LabTable;
