import { Paper, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { colors } from "../../styles/theme";

interface AdminPermissionProps {
  stock_status?: boolean;
}

const AdminPermission: React.FC<AdminPermissionProps> = ({ stock_status }) => {
  const switchHandler = async () => {
    // Implement your switch handling logic here
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
        onChange={switchHandler}
        defaultChecked={stock_status}
        sx={{
          "& .MuiButtonBase-root ": {
            color: `${colors.gold[100]} !important`,
          },
        }}
      />
      <Typography
        whiteSpace="nowrap"
        color={stock_status ? "orange" : "green"}
        fontWeight="bold"
        fontFamily="Yekan"
        variant="h6"
      >
        وضعیت خرید فروش :
        <span
          style={{
            color: stock_status ? "green" : "red",
            fontWeight: "bold",
            fontFamily: "Yekan",
            fontSize: "22px",
            padding: "10px",
          }}
        >
          {stock_status ? "فعال" : "غیر فعال"}
        </span>
      </Typography>
    </Paper>
  );
};

export default AdminPermission;
