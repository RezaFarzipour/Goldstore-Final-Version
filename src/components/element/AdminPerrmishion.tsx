import { Paper, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { colors } from "../../styles/theme";
import { useMutation } from "@tanstack/react-query";
import { switchData } from "../../services/adminPanel";
import { useState } from "react";

interface AdminPermissionProps {
  stock_status?: boolean; // Initial status from props
}

const AdminPermission: React.FC<AdminPermissionProps> = ({ stock_status }) => {
  // Local state to manage the switch status
  const [currentStatus, setCurrentStatus] = useState(stock_status);

  // Mutation for changing the status
  const { mutate: changeStatus } = useMutation({
    mutationFn: switchData,
    onSuccess: () => {
      setCurrentStatus((prevStatus) => !prevStatus);
    },
  });

  // Handler for switch change
  const handleSwitchChange = () => {
    changeStatus(); // Trigger the mutation
  };

  return (
    <Paper
      sx={{
        bgcolor: colors.gold[200],
        maxWidth: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        height: "auto",
        py: 1.5,
        px: 2,
      }}
    >
      <Switch
        onChange={handleSwitchChange} // Use the handler function
        checked={currentStatus} // Use the local state for the switch
        sx={{
          "& .MuiSwitch-thumb": {
            color: currentStatus ? "green" : "red",
          },
          "& .MuiSwitch-track": {
            backgroundColor: currentStatus ? "green" : "red",
          },
        }}
      />
      <Typography
        whiteSpace="nowrap"
        color={colors.gold[100]}
        fontWeight="bold"
        fontFamily="Yekan"
        variant="h6"
      >
        وضعیت خرید فروش :
        <span
          style={{
            color: currentStatus ? "green" : "red",
            fontWeight: "bold",
            fontFamily: "Yekan",
            fontSize: "22px",
            padding: "10px",
          }}
        >
          {currentStatus ? "فعال" : "غیر فعال"}
        </span>
      </Typography>
    </Paper>
  );
};

export default AdminPermission;
