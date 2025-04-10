export function toPersianDigits(n: number | string): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}


export const priceSeptrator = (num: number |string ): string => {
  return num.toLocaleString("en-US");
};

export const deleteCookie = (name:string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};


export const FarsiToEnglishNumber = (str: string): string => {
  const farsiDigits = "۰۱۲۳۴۵۶۷۸۹";
  return str
    .replace(/[^\d۰-۹]/g, "") // فقط عدد (فارسی یا انگلیسی) رو نگه می‌داریم
    .replace(/[۰-۹]/g, (d) => farsiDigits.indexOf(d).toString());
};