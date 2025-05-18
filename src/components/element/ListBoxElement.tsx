import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { colors } from "../../styles/theme";
import { Box } from "@mui/material";

type DrawerItem = {
  id: number;
  label: string;
  children?: {
    id: number;
    subLabel: string;
    path: string;
  }[];
};

type Props = {
  segment: DrawerItem;
  handleSubmit: (index: number, path: string) => void;
  selectedIndex: number | null;
  cMinHeight: boolean;
  setCMinHeight: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListBoxElement: React.FC<Props> = ({
  segment,
  handleSubmit,
  selectedIndex,
  cMinHeight,
  setCMinHeight,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setCMinHeight(cMinHeight);
  };

  return (
    <List
      disablePadding
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
    
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:hover": { bgcolor: colors.gold[100] },
          p: 0,
          bgcolor:
            segment.id === selectedIndex ? colors.gold[100] : "transparent",
        }}
        onClick={handleClick}
      >
        <Box pl={2}>
          {segment.icon}
        </Box>
        <ListItemText
          primary={segment.label}
          sx={{
            width: "100%",
            py: 1,
            pl: 2,
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ width: "100%" }}>
          {segment.children?.map((sub) => (
            <ListItemButton
              key={sub.id}
              onClick={() => handleSubmit(sub.id, sub.path)}
              sx={{
                pl: 4,
                width: "100%",
                "&:hover": { bgcolor: colors.gold[100] },
                bgcolor:
                  sub.id === selectedIndex ? colors.gold[100] : "transparent",
              }}
            >
   <Box display={"flex"} alignItems={"center"} gap={2}>

    {sub.icon}
   <ListItemText
                primary={sub.subLabel}
                primaryTypographyProps={{ fontSize: "17px" }}
                sx={{
               
                  width: "100%",
                  color:
                    sub.id === selectedIndex ? colors.primary[300] : "white",
                }}
              />
   </Box>
             
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default ListBoxElement;
