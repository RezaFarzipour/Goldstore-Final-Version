// components/table/ActionMenu.tsx
import { Divider, Menu, MenuItem } from "@mui/material";
import { colors } from "../../styles/theme";

interface ActionMenuProps<T> {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  selectedRow: T | null;
  btnvalue1?: string;
  btnvalue2?: string;
  btnAction1?: (row: T) => void;
  btnAction2?: (row: T) => void;
}

export const ActionMenu = <T extends object>({
  anchorEl,
  onClose,
  selectedRow,
  btnvalue1,
  btnvalue2,
  btnAction1,
  btnAction2,
}: ActionMenuProps<T>) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        "& .muirtl-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
          bgcolor: colors.gold[200],
          color: "#efefef",
        },
      }}
    >
      {btnAction1 && selectedRow && (
        <MenuItem
          onClick={() => {
            btnAction1(selectedRow);
            onClose();
          }}
        >
          {btnvalue1}
        </MenuItem>
      )}
      <Divider variant="middle" component="li" sx={{ bgcolor: "#fff" }} />

      {btnAction2 && selectedRow && (
        <MenuItem
          onClick={() => {
            btnAction2(selectedRow);
            onClose();
          }}
        >
          {btnvalue2}
        </MenuItem>
      )}
    </Menu>
  );
};
