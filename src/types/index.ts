export interface NavLinks {
  id: number;
  path: string;
  label: string;
}

export type footerdatatypes = {
  footerlinks1: {
    href: string;
    text: string;
  }[];
  footerlinks2: {
    href: string;
    text: string;
  }[];
  footerContactInfo: {
    label: string;
    text: string;
  }[];
};

export type stepstypes = {
  id: number;
  label: string;
  description: string;
};

export type FaqItem = {
  id: number;
  panel: string;
  title: string;
  description: string;
};

declare module "stylis-plugin-rtl";

export type DrawerItem = {
  id: number;
  subLabel?: string;
  label?: string;
  path: string;
  children?: DrawerItem[];
};

export type customerDashboardDataType = {
  id: number;
  title: string;
  subtitle?: string;
  visibility?: "visable" | "hidden";
  //price: number | string; 
  btn?: string;
  btnColor?: string;
  unit: string;
  displayBtn: "flex" | "none";
  path?: string;
}

export type BaseProps = {
  headerLable: string;
  priceColor: string;
};