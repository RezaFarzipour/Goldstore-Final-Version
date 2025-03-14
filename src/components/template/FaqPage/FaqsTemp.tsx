import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid2 } from "@mui/material";
import { faqsObject1, faqsObject2 } from "../../../constants/data";
import { TypoOneSx, TypoThreeSx, TypoTitle, TypotwoSx } from "./style";
import { FaqItem } from "../../../types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../modules/FaqModule";
import Layout from "../../containers/layout/Layout";

const FaqsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const renderFaqs = (faqs: FaqItem[]) =>
    faqs.map(({ panel, title, description, id }) => (
      <Accordion
        key={id}
        expanded={expanded === panel}
        onChange={handleChange(panel)}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ fontSize: 25, color: "#fff", margin: 1 }} />
          }
        >
          <Typography sx={TypoTitle}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={TypoThreeSx}>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    ));

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ mt: 12, mb: 6 }}>
        <Box>
          <Typography sx={TypoOneSx}>سوالات متداول</Typography>
        </Box>
        <Grid2 container mt={8} spacing={1}>
          <Box>
            <Typography sx={TypotwoSx}>درباره طلای آب شده</Typography>
          </Box>
          <Grid2 size={{ xs: 12 }}>{renderFaqs(faqsObject1)}</Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 5 }}>
            <Box>
              <Typography sx={TypotwoSx}>درباره سامانه</Typography>
            </Box>
            {renderFaqs(faqsObject2)}
          </Grid2>
        </Grid2>
      </Container>
    </Layout>
  );
};

export default FaqsPage;
