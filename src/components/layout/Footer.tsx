// import { Box,  Button,  Typography } from "@mui/material";
// import Grid from '@mui/material/Grid2';

// // import TelegramIcon from "@mui/icons-material/Telegram";
// // import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// import { Link } from "react-router-dom"; 
// import {
//   FooterButton,
//   Footer_Grid,
//   Gridstyle,
//   address_grid,
//   adress_typo,
//   footer_icon,
//   footer_link,
//   hr_style,
//   made_by_adlikara_typo,
//   span_style,
//   navlinks
// } from "./fotterstyle";
// import { footerdata } from "../../constants/data";

// const Footer = () => {
//   let color;

//   return (
//     <>
//       <Grid sx={Footer_Grid} >
//         {/* footer buttons */}
//         <Box
//           mt={4}
          
         
//           display="flex"
//           justifyContent="space-around"
//           alignItems="center"
//         >
   
//         <Box
//            component="div"
        
          
//             alignItems="center"
//             display="flex"
//             flexDirection="column"
//             sx={Gridstyle}
//           >
           
//                 {footerdata.footerlinks1.map((item,index)=>(
//                   <Box key={index} mb={2}>
//                     <Link to={item.href} style={footer_link}>
//                 <Button sx={navlinks}> {item.text}</Button>
//               </Link>
//               </Box>
//                 ))}
              
           
           
     
//           </Box>

//           <Box
//            component="div"
        
          
//             alignItems="center"
//             display="flex"
//             flexDirection="column"
//             sx={Gridstyle}
//           >
           
//                 {footerdata.footerlinks2.map((item,index)=>(
//                   <Box key={index} mb={2}>
//                     <Link to={item.href} style={footer_link}>
//                 <Button sx={navlinks} > {item.text}</Button>
//               </Link>
//               </Box>
//                 ))}
              
           
           
     
//           </Box>



     
//         </Box>

//         <Box
//           my={4}
       
//           display="flex"
//           justifyContent="space-around"
//           alignItems="center"
//         >
//           <Box  display="flex" alignItems="center" sx={address_grid}>
//             <Typography
//               fontFamily="Yekan"
//               color="white"
//               fontSize={20}
//               variant="h5"
//               sx={{ whiteSpace: "nowrap" }}
//             >
//               آدرس :زنجان.اعتمادیه.دانشگاه آزادی اعتمادیه
//             </Typography>
           
//           </Box>

//           <Box  display="flex" flexDirection="column" alignItems={"center"}>
//             <Box display="flex" alignItems="center">
//               <Typography
//                 fontFamily="Yekan"
//                 color="white"
//                 fontSize={20}
//                 sx={{ whiteSpace: "nowrap" }}
//               >
//                 {" "}
//                 تلفن :{" "}
//               </Typography>
//               <Box display="flex" flexDirection="column">
//                 <Box display="flex" alignItems="center">
//                   <Typography
//                     ml={2}
//                     fontFamily="Yekan"
//                     mr={1}
//                     color="#fff"
//                     variant="h6"
//                   >
//                     000000000
//                   </Typography>
//                   <span style={span_style}></span>
//                 </Box>
//                 <Box display="flex" alignItems="center">
//                   <Typography
//                     ml={2}
//                     fontFamily="Yekan"
//                     mr={1}
//                     color="#fff"
//                     variant="h6"
//                   >
//                     000000000
//                   </Typography>
//                   <span style={span_style}></span>
//                 </Box>
//               </Box>
//             </Box>

//             <Box mt={1} display="flex" alignItems="center">
//               {/* <TelegramIcon sx={footer_icon((color = "skyblue"))} />
//               <WhatsAppIcon sx={footer_icon((color = "green"))} />
//               <InstagramIcon sx={footer_icon((color = "red"))} /> */}
//             </Box>
//           </Box>
//         </Box>
//         <hr style={hr_style} />
//         <Typography sx={made_by_adlikara_typo}>
//           ساخته شده توسط آدلی کارا
//         </Typography>
//       </Grid>
//     </>
//   );
// };

// export default Footer;



import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import {
  Footer_Grid,
  Gridstyle,
  address_grid,
  footer_link,
  hr_style,
  made_by_adlikara_typo,
  span_style,
  navlinks,
  footer_icon,
} from "./fotterstyle";
import { footerdata } from "../../constants/data";
 import TelegramIcon from "@mui/icons-material/Telegram";
 import WhatsAppIcon from "@mui/icons-material/WhatsApp";
 import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  let color;
  return (
    <Grid  sx={Footer_Grid}>
      {/* Footer Links */}
      <Grid
        container
    
        size={{xs:12,sm:6}}
        
        display="flex"
        flexWrap="wrap"
        justifyContent={{ xs: "center", sm: "space-around" }}
        alignItems="center"
        mt={4}
      >
        {[footerdata.footerlinks1, footerdata.footerlinks2].map((links, idx) => (
          <Grid   size={{xs:12,sm:6}} key={idx} sx={Gridstyle} textAlign="center">
            {links.map((item, index) => (
              <Box key={index} mb={2}>
                <Link to={item.href} style={footer_link}>
                  <Button sx={navlinks}>{item.text}</Button>
                </Link>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Contact Info */}
      <Grid
        container
   
        size={{xs:12,sm:6}}
        display="flex"
        flexDirection="column"
        alignItems="center"
        my={4}
      >
        {footerdata.footerContactInfo.map((info, index) => (
          <Typography
            key={index}
            fontFamily="Yekan"
            color="white"
            fontSize={20}
            variant="h5"
            textAlign="center"
            sx={{ whiteSpace: "nowrap", mb: 1 }}
          >
            {info.label} : {info.text}
          </Typography>
        ))}
         <Box mt={1} display="flex" alignItems="center">
              <TelegramIcon sx={footer_icon((color = "skyblue"))} />
              <WhatsAppIcon sx={footer_icon((color = "green"))} />
            <InstagramIcon sx={footer_icon((color = "red"))} /> 
             </Box>
      </Grid>

      <hr style={hr_style} />
      <Typography sx={made_by_adlikara_typo} textAlign="center">
        ساخته شده توسط آدلی کارا
      </Typography>
    </Grid>
  );
};

export default Footer;
