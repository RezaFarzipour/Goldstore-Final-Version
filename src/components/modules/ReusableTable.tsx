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
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // آیکون سه‌نقطه‌ای
import { colors } from "../../styles/theme";
import { Rtl } from "../element/rtl";

// تعریف نوع داده‌های ورودی برای جدول
export interface Column<T> {
  id: keyof T | "actions"; // اضافه کردن "actions" برای ستون عملیات
  label: string; // عنوان ستون
  format?: (value: any) => string; // فرمت‌دهی اختیاری برای داده‌ها
}

interface ReusableTableProps<T> {
  columns: Column<T>[]; // لیست ستون‌ها و تنظیمات آن‌ها
  rows?: T[]; // داده‌های جدول (اختیاری با مقدار پیش‌فرض [])
  showActions?: boolean; // فلگ برای نمایش ستون عملیات
  btnvalue1?: string;
  btnvalue2?: string;
  btnAction1?: (row: T) => void;
  btnAction2?: (row: T) => void;
}

// کامپوننت جدول قابل استفاده مجدد
const ReusableTable = <T extends object>({
  columns,
  rows = [], // مقدار پیش‌فرض
  showActions = false,
  btnvalue1,
  btnvalue2,
  btnAction1,
  btnAction2,
}: ReusableTableProps<T>) => {
  const [page, setPage] = useState(0); // صفحه فعلی
  const [rowsPerPage, setRowsPerPage] = useState(5); // تعداد ردیف‌ها در هر صفحه
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // برای مدیریت منو
  const [selectedRow, setSelectedRow] = useState<T | null>(null); // ردیف انتخاب‌شده

  // بررسی وجود داده‌ها
  if (!rows || rows.length === 0) {
    return <div>داده‌ها در دسترس نیستند.</div>;
  }

  // محاسبه داده‌های نمایش داده شده در صفحه فعلی
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // تغییر صفحه
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // تغییر تعداد ردیف‌ها در هر صفحه
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // با تغییر تعداد ردیف‌ها، به صفحه اول برگردانید
  };

  // باز کردن منو
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, row: T) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  // بستن منو
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  return (
    <Rtl>
      <TableContainer
        sx={{
          bgcolor: colors.gold[200],
          color: "#fff",
          overflowX: "auto",
        }}
      >
        <Table>
          {/* سربرگ جدول */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  align="center"
                  key={String(column.id)}
                  sx={{
                    color: "#fff",
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
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                  }}
                >
                  عملیات
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          {/* بدنه جدول */}
          <TableBody>
            {paginatedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => {
                  if (column.id === "actions") return null; // ستون عملیات جداگانه مدیریت می‌شود
                  const value = row[column.id as keyof T];
                  return (
                    <TableCell
                      align="center"
                      key={String(column.id)}
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "0.8rem", sm: "1rem" },
                      }}
                    >
                      {column.format ? column.format(value) : value}
                    </TableCell>
                  );
                })}
                {showActions && (
                  <TableCell align="center">
                    {/* آیکون سه‌نقطه‌ای */}
                    <IconButton onClick={(e) => handleOpenMenu(e, row)}>
                      <MoreVertIcon sx={{ color: "#fff" }} />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* پیجینیشن */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} // گزینه‌های تعداد ردیف‌ها
          component="div"
          count={rows.length} // تعداد کل ردیف‌ها
          rowsPerPage={rowsPerPage} // تعداد ردیف‌ها در هر صفحه
          page={page} // صفحه فعلی
          onPageChange={handleChangePage} // تغییر صفحه
          onRowsPerPageChange={handleChangeRowsPerPage} // تغییر تعداد ردیف‌ها
          sx={{
            color: "#fff",
            "& .MuiInputBase-input": {
              color: "#fff",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            },
          }}
        />

        {/* منوی کشویی */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {btnAction1 && (
            <MenuItem
              onClick={() => {
                if (selectedRow) {
                  btnAction1(selectedRow);
                  handleCloseMenu();
                }
              }}
            >
              {btnvalue1}
            </MenuItem>
          )}

          {btnAction2 && (
            <MenuItem
              onClick={() => {
                if (selectedRow) {
                  btnAction2(selectedRow);
                  handleCloseMenu();
                }
              }}
            >
              {btnvalue2}
            </MenuItem>
          )}
        </Menu>
      </TableContainer>
    </Rtl>
  );
};

export default ReusableTable;