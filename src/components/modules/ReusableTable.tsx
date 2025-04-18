import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colors } from "../../styles/theme";
import { Rtl } from "../element/rtl";
import { ActionMenu } from "../element/ActionMenu";

export interface Column<T> {
  id: keyof T | "actions";
  label: string;
  format?: (value: T[keyof T]) => string; // تابع فرمت‌دهی که ورودی‌اش هر نوعی از مقادیر T هست}
}
interface ReusableTableProps<T> {
  columns: Column<T>[];
  rows?: T[];
  showActions?: boolean;
  btnvalue1?: string;
  btnvalue2?: string;
  btnAction1?: (row: T) => void;
  btnAction2?: (row: T) => void;
}

const ReusableTable = <T extends object>({
  columns,
  rows = [],
  showActions = false,
  btnvalue1,
  btnvalue2,
  btnAction1,
  btnAction2,
}: ReusableTableProps<T>) => {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<T | null>(null);
  const theme = useTheme();

  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, row: T) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  if (!rows || rows.length === 0) {
    return <Box sx={{ color: "#999" }}>داده‌ ای در دسترس نیستند.</Box>;
  }
  return (
    <Rtl>
      <TableContainer
        sx={{
          bgcolor: theme.palette.grey[900],
          color: "#fff",
          overflowX: "auto",
          borderRadius: "8px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={String(column.id)}
                  align="center"
                  sx={{
                    color: colors.gold[100],
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              {showActions && (
                <TableCell
                  align="center"
                  sx={{
                    color: colors.gold[100],
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  عملیات
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => {
                  if (column.id === "actions") return null;
                  const value = row[column.id as keyof T];
                  return (
                    <TableCell
                      key={String(column.id)}
                      align="center"
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "0.8rem", sm: "1rem" },
                      }}
                    >
                      {column.format
                        ? column.format(value)
                        : typeof value === "string" || typeof value === "number"
                          ? value
                          : String(value)}
                    </TableCell>
                  );
                })}
                {showActions && (
                  <TableCell align="center">
                    <IconButton onClick={(e) => handleOpenMenu(e, row)} >
                      <MoreVertIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: "#fff",
            "& .MuiInputBase-input": {
              color: "#fff",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            },
          }}
        />

        {/*  منوی  */}
        <ActionMenu
          anchorEl={anchorEl}
          onClose={handleCloseMenu}
          selectedRow={selectedRow}
          btnvalue1={btnvalue1}
          btnvalue2={btnvalue2}
          btnAction1={btnAction1}
          btnAction2={btnAction2}
        />
      </TableContainer>
    </Rtl>
  );
};

export default ReusableTable;
