import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DrawerItem } from "../../types";
import { colors } from "../../styles/theme";

type Props = {
  segment: DrawerItem;
  handleSubmit: (index: number, path: string) => void;
  selectedIndex: number | null;
};

const ListBoxElement: React.FC<Props> = ({
  segment,
  handleSubmit,
  selectedIndex,
}) => {
  return (
    <Accordion sx={{ all: "unset", color: "white" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls={`${segment.id}-content`}
        id={`${segment.id}-header`}
        sx={{ p: 0 }}
      >
        <Typography component="span">{segment.label}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        {segment.children?.map((sub) => (
          <ListItemButton
            key={sub.id}
            onClick={() => handleSubmit(sub.id, sub.path)}
            sx={{
              ":hover": { bgcolor: colors.gold[100] },
              bgcolor:
                sub.id === selectedIndex ? colors.gold[100] : "transparent",
            }}
          >
            <ListItemText
              sx={{
                color: sub.id === selectedIndex ? colors.primary[300] : "white",
              }}
              primaryTypographyProps={{ fontSize: "17px" }}
              primary={sub.subLabel}
            />
          </ListItemButton>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default ListBoxElement;
