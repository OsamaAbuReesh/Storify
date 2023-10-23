import GridTable from "../../Components/Shared/GridTable";

import DataGridCol from "../../Data/Orders/DataGridColumn";
import OrdersData from "../../Data/Orders/Orders-Latest.json";
const Orders = () => {
  return (
    <div style={{ height: "100%" }}>
      <GridTable tableTitle={"Orders"} cols={DataGridCol} data={OrdersData} />
    </div>
  );
};
export default Orders;
