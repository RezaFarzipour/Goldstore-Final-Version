import { NavLinks, stepstypes } from "../types";
import { footerdatatypes } from "../types";
export const navlinks:NavLinks[] = [
    {
      id: 4,
      link: "/",
      text: "خانه",
    },
    {
      id: 1,
      link: "/aboutus",
      text: "درباره ما",
    },
  
    {
      id: 2,
      link: "/faqs",
      text: "سوالات متداول",
    },
    {
      id: 3,
      link: "/contactus",
      text: "ارتباط با ما",
    },
  ];


  export const footerdata :footerdatatypes ={
footerlinks1 :[
    {
        href:"/",
        text:"صفحه اصلی"
    },
    {
        href:"/About",
        text:"درباره ما"
    },
    
],
    footerlinks2:[
        {
            href:"/Faqs",
            text:"سوالات متداول"
        },
        {
            href:"/Contact",
            text:"ارتباط با ما"
        }
    ]
   ,

footerContactInfo :[
    {
        label:"آدرس",
        text:"تهران، خیابان امیرکبیر، پلاک 1"
    },
    {
        label:"شماره تماس",
        text:"+98123454667"
    }
]
}



export const steps:stepstypes[] = [
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
