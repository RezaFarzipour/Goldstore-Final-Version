export  interface NavLinks {
    id: number;
    link: string;
    text: string;
  }
  

  export type  footerdatatypes ={
    footerlinks1 :{
       href:string,
        text:string
    }[],
    footerlinks2 :{
      href:string,
       text:string
   }[],
    footerContactInfo:{
       label:string,
        text:string
    }[]
  }


  export type stepstypes = {
    id: number,
    label: string
    description: string
  
  }