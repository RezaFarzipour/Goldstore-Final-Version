import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
} from "@mui/material";
import React from "react";
import { TablepaginationStyle } from "../template/customerdashboard/style";

type CustomTabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
 
};

function CustomTabPanel(props: CustomTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </section>
  );
}

const CustomPanel = ({ value }: { value: number }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <CustomTabPanel value={value} index={0}>
      <section>
        <Table stickyHeader aria-label="sticky table" sx={{ direction: "ltr" }}>
          <TableHead>
            {/* <TableRow sx={{}}>
                      {columnsDeposit.map((column) => (
                        <TableCell
                          sx={{ bgcolor: "#272523", color: "#fff" }}
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow> */}
          </TableHead>

          <TableBody>
            {/* {depositToken
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            {columnsDeposit.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  sx={{ color: "#fff" }}
                                >
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })} */}
          </TableBody>
        </Table>
        <TablePagination
          sx={TablepaginationStyle}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          //   count={depositToken.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </section>
    </CustomTabPanel>
  );
};

export default CustomPanel;
