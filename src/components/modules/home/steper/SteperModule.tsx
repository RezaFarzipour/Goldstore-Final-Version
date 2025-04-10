import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import { Fab, Container } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { steps } from "../../../../constants/data";
import {
  FirstBox,
  GoldBox,
  TypographyStyle,
  MainBox,
  BoxGold2,
  FabStyle,
  TypographyStylemobile,
} from "./style";

import { colors } from "../../../../styles/theme";
import { Rtl } from "../../../element/rtl";

const SteperStep: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) =>
        prevStep >= steps.length - 1 ? 0 : prevStep + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Rtl>
      <Container maxWidth="xl">
        {/* حالت دسکتاپ */}
        <Box sx={FirstBox}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={handleStep(index)}
                >
                  <Fab sx={FabStyle(activeStep, index)} aria-label="step">
                    {activeStep >= index + 1 ? (
                      <DoneIcon sx={{ color: colors.grey[200] }} />
                    ) : (
                      step.id
                    )}
                  </Fab>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      pl: 2,
                      color: activeStep == index ? colors.gold[100] : "#fff",
                      fontWeight:"400",
                      fontSize: "15px",
                    }}
                  >
                    {step.label}
                  </Typography>
                </Box>
              </Step>
            ))}
          </Stepper>
          <Box sx={GoldBox}>
            <Typography sx={TypographyStyle(activeStep, activeStep)}>
              {steps[activeStep]?.description}
            </Typography>
          </Box>
        </Box>

        {/* حالت موبایل */}
        <Box sx={MainBox}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={handleStep(index)}
                >
                  {activeStep === index ? (
                    <Box sx={BoxGold2}>
                      <Box display="flex" alignItems="center">
                        <Fab sx={FabStyle(activeStep, index)} aria-label="step">
                          {activeStep >= index + 1 ? <DoneIcon /> : step.id}
                        </Fab>
                        <Typography
                          sx={TypographyStylemobile(activeStep, index)}
                        >
                          {step.label}
                        </Typography>
                      </Box>
                      <StepContent>
                        <Typography sx={{ py: 1.5 }}>
                          {step.description}
                        </Typography>
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
    </Rtl>
  );
};

export default SteperStep;
