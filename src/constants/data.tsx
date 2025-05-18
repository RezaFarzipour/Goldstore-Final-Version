import {
  customerDashboardDataType,
  DrawerItem,
  FaqItem,
  NavLinks,
  signupinfoTypes,
  stepstypes,
} from "../types";
import { footerdatatypes } from "../types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SellIcon from "@mui/icons-material/Sell";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// LayoutData:
export const navlinks: NavLinks[] = [
  {
    id: 1,
    path: "/aboutus",
    label: "درباره ما",
  },

  {
    id: 2,
    path: "/faqs",
    label: "سوالات متداول",
  },
  {
    id: 3,
    path: "/contactus",
    label: "ارتباط با ما",
  },
];

export const footerdata: footerdatatypes = {
  footerlinks1: [
    {
      href: "/",
      text: "صفحه اصلی",
    },
    {
      href: "/aboutus",
      text: "درباره ما",
    },
  ],
  footerlinks2: [
    {
      href: "/faqs",
      text: "سوالات متداول",
    },
    {
      href: "/contactus",
      text: "ارتباط با ما",
    },
  ],
  footerContactInfo: [
    {
      label: "آدرس",
      text: "تهران، خیابان امیرکبیر، پلاک 1",
    },
    {
      label: "شماره تماس",
      text: "+98123454667",
    },
  ],
};

// StepperData:
export const steps: stepstypes[] = [
  {
    id: 1,
    label: "ثبت نام و احراز هویت",
    description: `ثبت نام در طلای تهران ساده بوده و در چند دقیقه اتفاق میافتد.نیازی نیست به جایی مراجعه کنید یا عکس یا فیلمی بارگزاری گنید.`,
  },
  {
    id: 2,
    label: "شارژ کیف پول",
    description: `
      با ثبت‌نام در طلای تهران برای شما یک کیف‌پول ریالی و یک کیف طلا ایجاد می‌شود. برای
      خرید طلا کافی است کیف پول خود را به میزان دلخواه شارژ کنید.`,
  },
  {
    id: 3,
    label: "خرید و فروش طلا",
    description: `بلافاصله پس از شارژ کیف پول می‌توانید طلا بخرید و یا اگر در کیف طلای خود طلا دارید، می‌توانید هر مقدار از آن را که می‌خواهید بفروشید.`,
  },
  {
    id: 4,
    label: " تسویه ریالی یا تحویل طلای فیزیکی",
    description: `با درخواست تسویه‌ی ریالی، هر میزان از موجودی کیف پول که می‌خواهید نهایتاً طی یک روز کاری به حساب بانکی شما واریز می‌شود. همچنین می‌توانید موجودی کیف طلایی خود را به صورت فیزیکی تحویل بگیرید.`,
  },
];

// FaqsData:
export const faqsObject1: FaqItem[] = [
  {
    id: 1,
    panel: "panel1",
    title: "طلای آب شده چیست؟",
    description:
      "طلای زینتی دست دومی که دیگر قابل استفاده نیست، در آزمایشگاه های عیارسنجی معتبر، ذوب شده و به شکل قطعات با ابعاد مختلف، به عنوان ماده اولیه صنعت طلاسازی و بین همکاران معامله می‌شود. مزیت طلای آب‌شده نسبت به طلای زینتی، خرید و فروش آن بدون هزینه های جانبی از جمله اجرت، سود فروشنده و مالیات بر ارزش افزوده است. طلای معامله شده در طلای تهران از جنس طلای آب‌شده است. و از این جهت برای سرمایه گذاری گزینه مناسب تر است.",
  },
  {
    id: 2,
    panel: "panel2",
    title: "عیار چیست؟",
    description:
      "به دلیل انعطاف پذیری و نرمی طلای خالص، برای ساخت زیورآلات، آن را با فلزات دیگری مانند مس و نقره ترکیب می‌کنند. لذا در قیمت گذاری یک قطعه طلا، میزان خلوص طلای موجود در آن اهمیت دارد که برای نشان دادن میزان خلوص از شاخصی به نام عیار استفاده می‌شود که عمدتاً بر مبنای ۱۰۰۰ یا ۲۴ می‌باشد. به طور نمونه استاندارد طلای استفاده شده برای زیورآلات در کشورمان، طلای ۱۸ عیار (از واحد ۲۴) معادل عیار ۷۵۰ (از ۱۰۰۰) است که به معنای آن است که ۷۵ درصد از قطعه طلای مذکور، طلای خالص بوده و ۲۵ درصد آن فلزات دیگر است. معیار خرید و فروش در طلای تهران با عیار استاندارد ایران یعنی ۱۸ عیار است.",
  },
  {
    id: 3,
    panel: "panel3",
    title: " انگ چیست؟",
    description:
      "یک شماره یا کد شناسایی است که بر روی طلای آب‌شده توسط آزمایشگاه عیارسنجی حک می‌شود و به نوعی شناسنامه طلای آب‌شده است. کلیه طلاهای عرضه شده در طلای تهران دارای انگ و شناسنامه از آزمایشگاه های معتبر بوده و قابل استعلام از آزمایشگاه ها یا سامانه نمایش جواب انگ طلا می‌باشد.",
  },
  {
    id: 4,
    panel: "panel4",
    title: "چگونه از اصالت طلای اب شده مطلع شویم؟",
    description:
      "طلای ‌آب‌شده توسط آزمایشگاه‌های معتبر عیار سنجی شده و شماره‌ای به عنوان انگ روی آن حک می‌شود. با استعلام تلفنی این شماره از آزمایشگاه و یا استعلام اینترنتی آن از سامانه نمایش جواب انگ طلا، عیار طلای آب‌شده به شما اعلام می‌گردد.",
  },
];

export const faqsObject2: FaqItem[] = [
  {
    id: 5,
    panel: "panel5",
    title: " ثبت نام در  طلای تهران چقدر طول میکشد؟",
    description:
      "ثبت نام در طلای تهران در تنها کمتر از یک دقیقه انجام می‌شود. ثبت نام و احراز هویت در طلای تهران ساده بوده و در چند ثانیه اتفاق می‌افتد. نیازی نیست به جایی مراجعه کنید یا از خودتان عکس، فیلم یا مدرکی بارگذاری کنید. تنها کافی است مالکیت تلفن همراه و حساب‌های بانکی که با استفاده از آنها واریز انجام می‌شود متعلق به خودتان باشد.",
  },
  {
    id: 6,
    panel: "panel6",
    title: "آیا مبلغ واریز و خرید روزانه در طلای تهران محدود است؟",
    description:
      "طلای ‌آب‌شده توسط آزمایشگاه‌های معتبر عیار سنجی شده و شماره‌ای به عنوان انگ روی آن حک می‌شود. با استعلام تلفنی این شماره از آزمایشگاه و یا استعلام اینترنتی آن از سامانه نمایش جواب انگ طلا، عیار طلای آب‌شده به شما اعلام می‌گردد.",
  },
  {
    id: 7,
    panel: "panel7",
    title: " تفاوت قیمت خرید و فروش در طلای تهران چقدر ؟",
    description:
      "همانطور که می‌دانید قیمت طلا همراه با نوسانات لحظه‌ای است. ار آنجا که طلای تهران متعهد است تمامی معاملات را دقیقا با قیمتی که در سایت به کاربر نمایش داده شده به انجام رساند، مجبور است برای پوشش اختلاف قیمت طلایی که از قبل خریداری کرده و یا نوسانات قیمتی که ممکن است در آینده اتفاق بیافتد، اختلافی جزئی بین قیمت خرید و فروش قرار دهد. این تفاوت قیمت خرید و فروش در طلای تهران به نحوی تنظیم شده تا هم برای کاربران سامانه به‌صرفه بوده و هم بتواند ریسک نوسانات قیمتی را پوشش دهد.",
  },
  {
    id: 8,
    panel: "panel8",
    title: "نحوه تعیین قیمت؟",
    description:
      "یقیمت لحظه‌ای در طلای تهران بر اساس قیمت لحظه‌ای معاملات بازار تهران و با استفاده از تکنیک‌های علوم‌داده و هوش مصنوعی در ساعات غیر کاری بازار تعیین می‌شود. اگر تفاوتی بین قیمت ارائه شده در طلای تهران و سایر تابلو‌های قیمتی آنلاین مشاهده کردید توجه داشته باشید قیمت طلای تهران موثق‌تر و دقیق‌تر است زیرا معاملات در طلای تهران کاغذی، صوری و یا بدون پشتوانه نبوده و بر اساس این قیمت، معاملات به صورت نقدی و لحظه‌ای صورت می‌پذیرد. موجودی طلای خود بفروشید.",
  },

  {
    id: 9,
    panel: "panel9",
    title: "آیا میتوان از حساب بانکی شخصی دیگری از طلای تهران خرید کرد؟",
    description:
      "ثبت نام در طلای تهران، نیازمند احراز هویت است و به دستور پلیس فتا و با توجه به قوانین و مقررات موجود از جمله قانون مبارزه با پولشویی، کلیه تراکنش های بانکی در طلای تهران (واریزی و برداشت) صرفاً با حساب بانکی خود مشتریان صورت می‌گیرد. لازم به ذکر است فرآیند احراز هویت در طلای تهران بسیار ساده و در سریعترین زمان ممکن و از طریق شبکه بانکی صورت گرفته و برای این کار نیاز به گرفتن تصویر یا ویدئو و ارسال و بارگذاری هیچگونه مدرکی ندارید.",
  },
  {
    id: 10,
    panel: "panel10",
    title: " آیا همه روزه میتوانم طلای خود را بفروشم؟",
    description:
      "برای فروش طلا نیز مانند خرید طلا هیچگونه محدودیتی از نظر زمانی و مقداری وجود ندارد و در هر ساعتی از شبانه روز و هر ۷ روز هفته و حتی ایام تعطیل می‌توانید هر میزان از طلای خود را که می‌خواهید به نرخ لحظه‌ای بفروشید و درخواست برداشت موجودی ریالی خود را ثبت کنید.",
  },
  {
    id: 11,
    panel: "panel11",
    title: " آیا همه روزه میتوانم طلای خود را بفروشم؟",
    description:
      "برای فروش طلا نیز مانند خرید طلا هیچگونه محدودیتی از نظر زمانی و مقداری وجود ندارد و در هر ساعتی از شبانه روز و هر ۷ روز هفته و حتی ایام تعطیل می‌توانید هر میزان از طلای خود را که می‌خواهید به نرخ لحظه‌ای بفروشید و درخواست برداشت موجودی ریالی خود را ثبت کنید.",
  },
  {
    id: 12,
    panel: "panel12",
    title: " پول طلای فروخته شده طی چه مدت واریز میشود؟",
    description:
      "پس از درخواست برداشت ریالی، در اولین فرصت، درخواست واریز به حساب مشتری به صورت پایا ثبت می‌گردد و معمولاً در اولین سیکل تسویه پایا (بنا بر دستورالعمل بانک مرکزی) این اتفاق می‌افتد. البته امکان تسویه حساب زودتر از موعد در برخی از بانکها وجود دارد و در صورت درخواست مشتری و در موارد خاص تسویه آنی نیز امکان پذیر است.",
  },
];

export const CustomerdrawerList: DrawerItem[] = [
  {
    id: 1,
    icon: <DashboardIcon />,
    label: "میز کار",
    path: "/customerdashboard",
    children: [],
  },
  {
    id: 2,
    icon: <AttachMoneyIcon />,
    label: "واریز وجه",
    path: "/customerdashboard/deposit",
    children: [],
  },
  {
    id: 3,
    icon: <MoneyOffIcon />,
    label: "برداشت وجه",
    path: "/customerdashboard/withdraw",
    children: [],
  },
  {
    id: 4,
    icon: <StorefrontIcon />,
    label: "خرید طلا",
    path: "/customerdashboard/buy-gold",
    children: [],
  },
  {
    id: 5,
    icon: <SellIcon />,
    label: "فروش طلا",
    path: "/customerdashboard/sell-gold",
    children: [],
  },
  {
    id: 6,
    icon: <AssessmentIcon />,
    label: "گزارش",
    path: "/customerdashboard/reports",
    children: [],
  },
  {
    id: 7,
    icon: <CallReceivedIcon />,
    label: "دریافت طلا",
    path: "/customerdashboard/receive-gold",
    children: [],
  },
];
export const AdmindrawerList: DrawerItem[] = [
  {
    id: 1,
    icon: <AccountBalanceWalletIcon />,
    label: "موجودی حساب ها",
    path: "/admin/inventory",
    children: [],
  },
  {
    id: 2,
    icon: <CallReceivedIcon />,
    label: "برداشت طلا",
    path: "/admin/gold-withdraw",
  },
  {
    id: 3,
    icon: <MoneyOffIcon />,
    label: "برداشت وجه",
    path: "/admin/cash-withdraw",
  },

  {
    id: 4,
    icon: <SellIcon />,
    label: "فروش طلا",
    path: "/admin/gold-sale",
    children: [],
  },
  {
    id: 5,
    icon: <AssessmentIcon />,
    label: "گزارش ها",
    path: "",
    children: [
      {
        id: 51,
        icon: <StorefrontIcon />,
        subLabel: "خرید طلا",
        path: "/admin/reports/gold-buy",
        children: [],
      },
      {
        id: 52,
        icon: <SellIcon />,
        subLabel: "فروش طلا",
        path: "/admin/reports/gold-sale",
        children: [],
      },
      {
        id: 53,
        icon:<ReceiptLongIcon/>,
        subLabel: "تراکنش ها",
        path: "/admin/reports/transactions",
        children: [],
      },
    ],
  },

  {
    id: 6,
    icon: <SettingsIcon />,
    label: "تنظیمات",
    path: "/admin/setting",
    children: [],
  },
];

export const getCustomerDashboardHomeData = (walletData: {
  walletBalance: number;
  goldBalance: number;
  buyPrice: number;
  sellPrice: number;
}): customerDashboardDataType[] => {
  return [
    {
      id: 1,
      title: "قیمت خرید از طلای تهران",
      subtitle: "(هر گرم طلا 18 عیار )",
      visibility: "visable",
      price: walletData.buyPrice,
      btn: "خرید",
      btnColor: "#41B62A",
      unit: "ریال",
      displayBtn: "flex",
      path: "/customerdashboard/buy-gold",
    },
    {
      id: 2,
      title: "قیمت فروش به طلای تهران",
      subtitle: "(هر گرم طلا 18 عیار )",
      visibility: "visable",
      price: walletData.sellPrice,
      btn: "فروش",
      btnColor: "#FF3F3F",
      unit: "ریال",
      displayBtn: "flex",
      path: "/customerdashboard/sell-gold",
    },
    {
      id: 3,
      title: "موجودی کیف پول",
      subtitle: "(هر گرم طلا 18 عیار )",
      visibility: "hidden",
      price: walletData.walletBalance,
      btn: "افزایش موجودی",
      btnColor: "skyblue",
      unit: "ریال",
      displayBtn: "flex",
      path: "/customerdashboard/deposit",
    },
    {
      id: 4,
      title: "موجودی کیف طلا",
      subtitle: "(هر گرم طلا 18 عیار )",
      btn: "موجودی کیف پول",
      price: walletData.goldBalance,
      unit: "گرم",
      displayBtn: "none",
    },
  ];
};

export const signupInputs: signupinfoTypes[] = [
  {
    id: 1,
    label: "نام",
    name: "first_name",
  },
  {
    id: 2,
    label: "نام نام خانوادگی",
    name: "last_name",
  },
  {
    id: 3,
    label: "کدملی",
    name: "national_code",
  },

  {
    id: 5,
    label: "ایمیل",
    name: "email",
  },
];
