import localFont from "next/font/local"



export const yekan = localFont({
    src:[
      {
        path:"../../public/fonts/woff2/IRANYekanWebThin.woff2",
        weight:"100",
        style:"normal"
      },
      {
        path:"../../public/fonts/woff2/IRANYekanWebRegular.woff2",
        weight:"200",
        style:"normal"
      },

      {
        path:"../../public/fonts/woff2/IRANYekanWebMedium.woff2",
        weight:"300",
        style:"normal"
      },

      {
        path:"../../public/fonts/woff2/IRANYekanWebExtraBold.woff2",
        weight:"400",
        style:"normal"
      },

   
     
    ],
        variable: "--font-yekan"
  })