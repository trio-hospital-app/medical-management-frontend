import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import PharmacyTable from "./tables/pharmacyTable";
import DoctorsTable from "./tables/doctorsTable";
// import FinanceTable from "./tables/financeTable";
import LabTable from "./tables/labTable";
// import NursingTable from "./tables/nursingTable";
import RadiologyTable from "./tables/radiologyTable";

function PatientTabsCard({ id, patientData, cid }) {
  return (
    <div className="bg-white rounded-[.5rem] py-5 w-full h-full">
      <Tabs defaultValue="doctor">
        <div className="border-b">
          <TabsList>
            <TabsTrigger value="doctor">Consultation</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value="laboratory">Laboratory</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value="radiology">Radiology</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
          </TabsList>
          {/* <TabsList>
            <TabsTrigger value="nursing">Nursing</TabsTrigger>
          </TabsList> */}
          {/* <TabsList>
            <TabsTrigger value="finance">Finance</TabsTrigger>
          </TabsList> */}
        </div>
        <div className="px-5">
          <TabsContent value="doctor">
            <DoctorsTable id={id} cid={cid} />
          </TabsContent>
          <TabsContent value="laboratory">
            <LabTable id={id} patientData={patientData} />
          </TabsContent>
          <TabsContent value="radiology">
            <RadiologyTable id={id} patientData={patientData} />
          </TabsContent>
          <TabsContent value="pharmacy">
            <PharmacyTable id={id} cid={cid} patientData={patientData} />
          </TabsContent>
          {/* <TabsContent value="nursing">
            <NursingTable />
          </TabsContent> */}
          {/* <TabsContent value="finance">
            <FinanceTable />
          </TabsContent> */}
        </div>
      </Tabs>
    </div>
  );
}

export default PatientTabsCard;
