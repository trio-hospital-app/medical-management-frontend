import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import Specimen from "./components/Specimen";
import Departments from "./components/departments";
import LabTestsTable from "./components/tables/labtestTable";
// import ObservationsTable from "./components/tables/observationsTable";

function LaboratoryManagement() {
  return (
    <div>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">Laboratory Management</h1>
      </div>
      <div className="px-5 py-2 flex items-center mt-5 bg-white rounded-lg w-full">
        <Tabs defaultValue="departments" className="w-full">
          <div className="w-full">
            <TabsList>
              <TabsTrigger value="departments">Departments</TabsTrigger>
            </TabsList>
            <TabsList>
              <TabsTrigger value="lab-test">Laboratory Tests</TabsTrigger>
            </TabsList>
            {/* <TabsList>
              <TabsTrigger value="observation">Observations</TabsTrigger>
            </TabsList> */}
            <TabsList>
              <TabsTrigger value="specimen">Specimen Containers</TabsTrigger>
            </TabsList>
          </div>
          <div className="px-5">
            <TabsContent value="departments">
              <Departments />
            </TabsContent>
            <TabsContent value="lab-test">
              <LabTestsTable />
            </TabsContent>
            {/* <TabsContent value="observation">
              <ObservationsTable />
            </TabsContent> */}
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
