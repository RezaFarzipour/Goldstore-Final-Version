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
  price?: number
  btn?: string;
  btnColor?: string;
  unit: string;
  displayBtn: "flex" | "none";
  path?: string;
}

export interface WalletDataResponse {
  walletBalance: number;
  goldBalance: number;
  buyPrice: number;
  sellPrice: number;
}


export type BaseProps = {
  headerLable: string;
  priceColor: string;
  price: number | undefined;
  walletData: WalletDataResponse | undefined
};


export type BaseAdminPanelProps = {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
};