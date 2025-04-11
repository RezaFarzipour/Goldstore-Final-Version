import React, { useEffect, useState } from "react";
import ReusableTable from "../../modules/ReusableTable";
import { usersInformationList } from "../../../services/adminPanel";

type Props = {};
// تعریف نوع داده‌ها
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
const InventoryTemp = (props: Props) => {
  const [data, setData] = useState<User[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      setData(usersInformationList);
    };
    getData(); // Call the async function to fetch data
  }, []);
  console.log(data);

  // داده‌های نمونه
  const users: User[] = [
    { id: 1, name: "Ali", age: 25, email: "ali@example.com" },
    { id: 2, name: "Reza", age: 30, email: "reza@example.com" },
    { id: 3, name: "Fatemeh", age: 28, email: "fatemeh@example.com" },
  ];

  // تعریف ستون‌ها
  const columns: Column<User>[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "money_amount", label: "موجودی کیف پول" },
    { id: "gold_amount", label: "موجودی طلا" },
  ];

  // توابع عملیات
  const handleEdit = (user: User) => {
    console.log("ویرایش کاربر:", user);
  };

  const handleDelete = (user: User) => {
    console.log("حذف کاربر:", user);
  };

  return (
    <div>
      {" "}
      <ReusableTable
        columns={columns}
        rows={users}
        showActions={true} // فعال کردن ستون عملیات
        onEdit={handleEdit} // تابع ویرایش
        onDelete={handleDelete} // تابع حذف
      />
    </div>
  );
};

export default InventoryTemp;
