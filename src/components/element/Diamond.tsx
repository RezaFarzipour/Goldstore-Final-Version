import { useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";
import header from "../../assets/video/header.mp4";

interface DiamondProps {
  position?: "top" | "bottom";
  startTime: number;
  endTime?: number;
}

const Diamond = ({ startTime, endTime }: DiamondProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // زمان شروع ویدیو
    video.currentTime = startTime;

    // توقف ویدیو در زمان مشخص
    const handleTimeUpdate = () => {
      if (endTime && video.currentTime >= endTime) {
        video.currentTime = startTime; // به زمان شروع بازگردانی
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [startTime, endTime]);

  return (
    <Box
      sx={{
        width: isMobile ? "80px" : "150px",
        height: isMobile ? "80px" : "150px",
        transform: "rotate(45deg)",
        margin: "10px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ویدیو داخل لوزی */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "200%",
          height: "200%",
          objectFit: "cover",
        }}
      >
        <source src={header} type="video/mp4" />
      </video>
    </Box>
  );
};

export default Diamond;
