import { NavLinks } from "../types";
import { footerdatatypes } from "../types";
export const navlinks:NavLinks[] = [
    {
      id: 4,
      link: "/",
      text: "خانه",
    },
    {
      id: 1,
      link: "/About",
      text: "درباره ما",
    },
  
    {
      id: 2,
      link: "/Faqs",
      text: "سوالات متداول",
    },
    {
      id: 3,
      link: "/Contact",
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