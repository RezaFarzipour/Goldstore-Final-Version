
export const formatNumberWithCommas = (value: string): string => {
  const numericValue = value.replace(/,/g, ""); // حذف ویرگول‌های موجود
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // اضافه کردن ویرگول به صورت دستی
};


export const removeCommas = (value: string): string => {
  return value.replace(/,/g, ""); // حذف ویرگول‌ها
};


export const priceSeptrator = (num: number | string): string => {
  return num.toLocaleString("en-US");
};


export function toPersianDigits(n: number | string): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}


export const FarsiToEnglishNumber = (str: string): string => {
  const farsiDigits = "۰۱۲۳۴۵۶۷۸۹";
  return str
    .replace(/[^\d۰-۹]/g, "") // فقط عدد (فارسی یا انگلیسی) رو نگه می‌داریم
    .replace(/[۰-۹]/g, (d) => farsiDigits.indexOf(d).toString());
};