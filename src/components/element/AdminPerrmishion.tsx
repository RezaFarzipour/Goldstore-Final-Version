import { Paper, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { colors } from "../../styles/theme";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { switchData } from "../../services/adminPanel";

interface AdminPermissionProps {
  stock_status?: boolean; // Initial status from props
}

const AdminPermission: React.FC<AdminPermissionProps> = ({ stock_status }) => {
  // Local state to manage the switch status
  const [currentStatus, setCurrentStatus] = useState(stock_status);

  // Fetch data using useQuery
  const { refetch } = useQuery({
    queryKey: ["switchData"],
    queryFn: switchData,
  });

  // Mutation for changing the status
  const { mutate: changeStatus } = useMutation({
    mutationFn: switchData,
    onSuccess: () => {
      // Update the local state after successful mutation
      setCurrentStatus((prevStatus) => !prevStatus);
      refetch(); // Optional: Refetch data if needed
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
