import { Box } from "@mui/material";
import GoldSale from "./reports/GoldSaleTemp";
import GoldBuy from "./reports/GoldBuyTemp";
import Transactions from "./reports/TransactionsTemp";

type Props = {};

const ReportsTemp = (props: Props) => {
  return (
    <Box>
      <Transactions />
      <GoldBuy />
      <GoldSale />
    </Box>
  );
};

export default ReportsTemp;
