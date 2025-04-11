import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { colors } from "../../styles/theme";
import { Rtl } from "../element/rtl";

// تعریف نوع داده‌های ورودی برای جدول
interface Column<T> {
  id: keyof T | "actions"; // اضافه کردن "actions" برای ستون عملیات
  label: string; // عنوان ستون
  format?: (value: any) => string; // فرمت‌دهی اختیاری برای داده‌ها
}

interface ReusableTableProps<T> {
  columns: Column<T>[]; // لیست ستون‌ها و تنظیمات آن‌ها
  rows: T[]; // داده‌های جدول
  showActions?: boolean; // فلگ برای نمایش ستون عملیات
  onEdit?: (row: T) => void; // تابع برای ویرایش
  onDelete?: (row: T) => void; // تابع برای حذف
}

// کامپوننت جدول قابل استفاده مجدد
const ReusableTable = <T extends object>({
  columns,
  rows,
  showActions = false,
  onEdit,
  onDelete,
}: ReusableTableProps<T>) => {
  const [page, setPage] = useState(0); // صفحه فعلی
  const [rowsPerPage, setRowsPerPage] = useState(5); // تعداد ردیف‌ها در هر صفحه

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

  // محاسبه داده‌های نمایش داده شده در صفحه فعلی
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Rtl>
      <TableContainer sx={{ bgcolor: colors.gold[200], color: "#fff" }}>
        <Table>
          {/* سربرگ جدول */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={String(column.id)}
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
              {showActions && (
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
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
                    <TableCell key={String(column.id)} sx={{ color: "#fff" }}>
                      {column.format ? column.format(value) : value}
                    </TableCell>
                  );
                })}
                {showActions && (
                  <TableCell>
                    {/* دکمه ویرایش */}
                    {onEdit && (
                      <IconButton onClick={() => onEdit(row)} color="primary">
                        <EditIcon />
                      </IconButton>
                    )}
                    {/* دکمه حذف */}
                    {onDelete && (
                      <IconButton onClick={() => onDelete(row)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    )}
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
          sx={{ color: "#fff", "& .MuiInputBase-input": { color: "#fff" } }}
        />
      </TableContainer>
    </Rtl>
  );
};

export default ReusableTable;
