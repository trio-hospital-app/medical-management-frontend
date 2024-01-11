import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import Schemes from "./components/schemes";

function FinanceManagement() {
  return (
    <div>
      <div className="px-5 py-2 flex items-center justify-between bg-white rounded-lg">
        <h1 className="font-bold text-2xl">Laboratory Management</h1>
      </div>
      <div className="px-5 py-2 flex items-center mt-5 bg-white rounded-lg w-full">
        <Tabs defaultValue="Scheme" className="w-full">
          <div className="w-full">
            <TabsList>
              <TabsTrigger value="Scheme">Schemes</TabsTrigger>
            </TabsList>
          </div>
          <div className="px-5">
            <TabsContent value="Scheme">
              <Schemes />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default FinanceManagement;
