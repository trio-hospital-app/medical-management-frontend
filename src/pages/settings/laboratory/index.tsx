import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import Specimen from "./components/Specimen";
import Departments from "./components/departments";
import LabCenters from "./components/labCenters";
import LabTestsTable from "./components/tables/labtestTable";
import ObservationsTable from "./components/tables/observationsTable";
import SpecimenContainerTable from "./components/tables/specimenContatainer";

function LaboratoryManagement() {
  return (
    <div>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">Laboratory Management</h1>
      </div>
      <div className="px-5 py-2 flex items-center mt-5 bg-white rounded-lg w-full">
        <Tabs defaultValue="lab-centers" className="w-full">
          <div className="w-full">
            <TabsList>
              <TabsTrigger value="lab-centers">Laboratory Centers</TabsTrigger>
            </TabsList>
            <TabsList>
              <TabsTrigger value="departments">Departments</TabsTrigger>
            </TabsList>
            <TabsList>
              <TabsTrigger value="lab-test">Laboratory Tests</TabsTrigger>
            </TabsList>
            <TabsList>
              <TabsTrigger value="observation">Observations</TabsTrigger>
            </TabsList>
            <TabsList>
              <TabsTrigger value="specimen-container">
                Specimen Container
              </TabsTrigger>
            </TabsList>
            <TabsList>
              <TabsTrigger value="specimen">Specimen</TabsTrigger>
            </TabsList>
          </div>
          <div className="px-5">
            <TabsContent value="lab-centers">
              <LabCenters />
            </TabsContent>
            <TabsContent value="departments">
              <Departments />
            </TabsContent>
            <TabsContent value="lab-test">
              <LabTestsTable />
            </TabsContent>
            <TabsContent value="observation"><ObservationsTable/></TabsContent>
            <TabsContent value="specimen-container">
              <SpecimenContainerTable />
            </TabsContent>
            <TabsContent value="specimen">
              <Specimen />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default LaboratoryManagement;
