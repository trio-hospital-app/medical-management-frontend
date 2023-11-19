import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import PharmacyTable from "./tables/PharmacyTable";
import DoctorsTable from "./tables/doctorsTable";
import FinanceTable from "./tables/financeTable";
import LabTable from "./tables/labTable";
import NursingTable from "./tables/nursingTable";
import RadiologyTable from "./tables/radiologyTable";

function PatientTabsCard() {
  return (
    <div className="bg-white rounded-[.5rem] py-5 w-full h-full">
      <Tabs defaultValue="doctor">
        <div className="border-b">
          <TabsList>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
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
          <TabsList>
            <TabsTrigger value="nursing">Nursing</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value="finance">Finance</TabsTrigger>
          </TabsList>
        </div>
        <div className="px-5">
          <TabsContent value="doctor">
            <DoctorsTable />
          </TabsContent>
          <TabsContent value="laboratory">
            <LabTable />
          </TabsContent>
          <TabsContent value="radiology">
            <RadiologyTable />
          </TabsContent>
          <TabsContent value="pharmacy">
            <PharmacyTable />
          </TabsContent>
          <TabsContent value="nursing">
            <NursingTable />
          </TabsContent>
          <TabsContent value="finance">
            <FinanceTable />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default PatientTabsCard;
