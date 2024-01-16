import { formatDate } from "../../../hooks/formattedDate";
import '../../../global.css'


function PrintReceipt({ receiptData }) {
  const source = (row) => {
    if (row.itemType === "labs") {
      return "Laboratory";
    }
  };

  const department = (row) => {
    if (row.itemType === "labs") {
      return row?.labId?.panelId?.panel;
    }
  };

  const cost = (row) => {
    if (row.itemType === "labs") {
      return row?.labId?.panelId?.cost;
    }
  };

  const sum = (total) => {
    return total.reduce((a, b) => a + b, 0);
  };

  return (
    <div className="print-receipt">
      <h1>Medopt Clinic</h1>
      <div className="receipt-table-container">
        <table className="receipt-table">
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>Bill Source</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {receiptData?.items.length > 0 ? (
              receiptData?.items?.map((el, index) => (
                <tr key={index}>
                  <td>{formatDate(el?.createdAt)}</td>
                  <td>{source(el)}</td>
                  <td>{department(el)}</td>
                  <td>NGN {cost(el)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="empty-list">
                  <img src="/empty-list.svg" alt="empty" />
                  <p>Result yet to be filled</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="total">Total: NGN {sum(receiptData?.total)}</div>
    </div>
  );
}

export default PrintReceipt;
