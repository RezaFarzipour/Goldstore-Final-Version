export function toPersianDigits(n: number | string): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}


export const priceSeptrator = (num: number ): string => {
  return num.toLocaleString("en-US");
};

export const deleteCookie = (name:string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
