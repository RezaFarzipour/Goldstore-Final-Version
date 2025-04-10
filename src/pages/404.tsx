import React from 'react'
import { Link } from "react-router-dom";
const NotFound:React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>۴۰۴</h1>
      <p style={styles.text}>متاسفیم! صفحه‌ای که دنبال آن هستید پیدا نشد.</p>
      <Link to="/" style={styles.link}>بازگشت به صفحه اصلی</Link>
    </div>
  )
}

export default NotFound


const styles :{ [key: string]: React.CSSProperties }= {
    container: {
      backgroundColor: "#1c1b19",
      color: "#FFC436",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "6rem",
      marginBottom: "20px",
    },
    text: {
      fontSize: "1.5rem",
      marginBottom: "30px",
    },
    link: {
      fontSize: "1.2rem",
      color: "#FFC436",
      textDecoration: "underline",
      cursor: "pointer",
    },
  };