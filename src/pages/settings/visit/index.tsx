import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import Departments from "./components/departments";

function VisitManagement() {
  return (
    <div>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">Doctor's Visit Management</h1>
      </div>
      <div className="px-5 py-2 flex items-center mt-5 bg-white rounded-lg w-full">
        <Tabs defaultValue="departments" className="w-full">
          <div className="w-full">
            <TabsList>
              <TabsTrigger value="departments">Departments</TabsTrigger>
            </TabsList>
          </div>
          <div className="px-5">
            <TabsContent value="departments">
              <Departments />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default VisitManagement;
