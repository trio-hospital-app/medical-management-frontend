import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import BillingTable from "./tables/billingTable";
import PatientInvoiceTable from "./tables/patientInvoiceTable";
import PaymentTable from "./tables/paymentTable";

function FinanceTabsCard() {
  return (
    <div className="bg-white rounded-[.5rem] py-5 w-full h-full">
      <Tabs defaultValue="Billing">
        <div className="border-b">
          <TabsList>
            <TabsTrigger value="Billing">Billing</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value="Payments">Payments</TabsTrigger>
          </TabsList>
          <TabsList>
            <TabsTrigger value="Invoices">Invoices</TabsTrigger>
          </TabsList>
        </div>
        <div className="px-5">
          <TabsContent value="Billing">
            <BillingTable />
          </TabsContent>
          <TabsContent value="Payments">
            <PaymentTable />
          </TabsContent>
          <TabsContent value="Invoices">
            <PatientInvoiceTable />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default FinanceTabsCard;
