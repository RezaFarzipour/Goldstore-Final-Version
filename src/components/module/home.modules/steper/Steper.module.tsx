import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { Fab,  Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import DoneIcon from "@mui/icons-material/Done";
import { steps } from "../../../../constants/data";
import { 
  FirstBox, GoldBox, TypographyStyle, 
  MainBox, BoxGold2, FabStyle,TypographyStylemobile
} from "./style";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const SteperStep: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep >= steps.length - 1 ? 0 : prevStep + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Container maxWidth="xl">
          {/* حالت دسکتاپ */}
          <Box sx={FirstBox}>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical"  sx={{display: "flex" ,alignItems: "start",justifyContent: "center"}} >
              {steps.map((step, index) => (
                <Step key={index}>
                  <Box     display= "flex" alignItems= "center" onClick={handleStep(index)}>
                    <Fab sx={FabStyle(activeStep, index)} aria-label="step">
                      {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                    </Fab>
                    <Typography  sx={{
                        cursor: "pointer",
                        pl: 2,
                        color: activeStep == index ? "#FFC436" : "#fff",
                        fontSize:"18px"
                      }}>
                      {step.label}
                    </Typography>
                  </Box>
                </Step>
              ))}
            </Stepper>
            <Box sx={GoldBox}>
              <Typography  sx={TypographyStyle(activeStep, activeStep)}>
                {steps[activeStep]?.description}
              </Typography>
            </Box>
          </Box>

          {/* حالت موبایل */}
          <Box sx={MainBox}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={index}>
                  <Box display= "flex"alignItems= "center" onClick={handleStep(index)}>
                    {activeStep === index ? (
                      <Box sx={BoxGold2}>
                        <Box     display= "flex"alignItems= "center">
                          <Fab sx={FabStyle(activeStep, index)} aria-label="step">
                            {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                          </Fab>
                          <Typography sx={TypographyStylemobile(activeStep, index)}>
                            {step.label}
                          </Typography>
                        </Box>
                        <StepContent>
                          <Typography sx={{ py: 1.5 }}>{step.description}</Typography>
                        </StepContent>
                      </Box>
                    ) : (
                      <>
                        <Fab sx={FabStyle(activeStep, index)} aria-label="step">
                          {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                        </Fab>
                        <Typography sx={TypographyStylemobile(activeStep, index)}>
                          {step.label}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default SteperStep;



// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepContent from "@mui/material/StepContent";
// import Typography from "@mui/material/Typography";
// import { Fab, Container } from "@mui/material";





// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// import DoneIcon from "@mui/icons-material/Done";
// import { steps } from "./Utils/StepsObjext";
// import {
//   FirstBox,
//   GoldBox,
//   MapBox,
//   SteperStyle,
//   TypographyStyle,
// } from  "./style";
// const themee = createTheme({
//   direction: "rtl",
// });

// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [rtlPlugin],
// });

// export default function StepperComputer() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       if (activeStep >= 3) {
//         setActiveStep(0);
//       } else {
//         setActiveStep(activeStep + 1);
//       }
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [activeStep]);

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   return (
//     <CacheProvider value={cacheRtl} >
//       <ThemeProvider theme={themee}>
//         <Container maxWidth={"xl"}>
//           <Box sx={FirstBox}>
//             <Stepper
//               nonLinear
//               activeStep={activeStep}
             
//               sx={SteperStyle}
//             >
//               {steps.map((label, index) => (
//                 <Step key={label} completed={completed[index]}>
//                   <Box color="inherit" sx={MapBox} onClick={handleStep(index)}>
//                     <Fab
//                       sx={{
//                         width: "15px",
//                         height: "1px",
//                         px: 1.8,

//                         bgcolor: activeStep == index ? "#FFC436" : "#fff",
//                       }}
//                       aria-label="add"
//                     >
//                       {activeStep >= index + 1 ? <DoneIcon /> : label.id}
//                     </Fab>
//                     <Typography
//                       sx={{
//                         cursor: "pointer",
//                         pl: 2,
//                         color: activeStep == index ? "#FFC436" : "#fff",
//                       }}
//                     >
//                       {label.label}
//                     </Typography>
//                   </Box>
//                 </Step>
//               ))}
//             </Stepper>

//             <Box sx={GoldBox}>
//               {/* {(activeStep % activeStep.length).toFixed()} */}
//               {steps.map((label, index) => {
//                 if (activeStep === index) {
//                   return (
//                     <Typography sx={TypographyStyle}>
//                       {label.description}
//                     </Typography>
//                   );
//                 }
//               })}
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }
