import { Box, Typography } from '@mui/material'
import React from 'react'
import GoldImg from '../../../assets/images/gold-block.1262eb83.webp'
import styles from './text.module.css'
const AuthGoldImage = () => {
  return (
    <Box
    width={"50%"}
    display={{ xs: "none", md: "flex" }}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <img
      style={{
        width: "240px",
        height: "330px",
        boxShadow: "-10px 10px 20px rgba(0, 0, 0, 0.4)",
        borderRadius: "12px", // اختیاری، برای زیبایی
      }}
      src={GoldImg}
    />
    <Typography
      sx={{ color: "#fff", fontSize: "15px", fontWeight: "300", mt: 3 }}
    >
      {" "}
      <span className={styles.goldText}>طلای تهران</span> درخشان مثل نامش،
      ماندگار مثل ارزشش.
    </Typography>
  </Box>
  )
}

export default AuthGoldImage