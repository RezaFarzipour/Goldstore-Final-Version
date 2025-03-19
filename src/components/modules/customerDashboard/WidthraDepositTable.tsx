import React from "react";
import { TableRtl } from "../../element/rtl";
import { Container, Paper, TableContainer } from "@mui/material";
import WidthrawDepositTableHeader from "../../element/WidthrawDepositTableHeader";
import CustomPanel from "../../element/WidthraDepositeBody";

const WidthraDepositTable = () => {
  const [value, setValue] = React.useState<number>(0);

  return (
    <TableRtl>
      <Container maxWidth={"md"}>
        <WidthrawDepositTableHeader value={value} setValue={setValue} />
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <TableContainer
            sx={{ maxHeight: 440, bgcolor: "#272523", color: "#fff" }}
          >
            <CustomPanel value={value}/>
            <CustomPanel value={value}/>

          </TableContainer>
        </Paper>
      </Container>
    </TableRtl>
  );
};

export default WidthraDepositTable;
