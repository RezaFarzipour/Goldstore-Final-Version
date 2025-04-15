import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { BoxOneSX, Cotainer, DivOne } from './style'

export const Animate: React.FC = () => {
  const animation = useRef<anime.AnimeTimelineInstance | null>(null);

  useEffect(() => {
    animation.current = anime.timeline({
      targets: ".divs",
      loop: true,
      easing: "easeInOutExpo",
      delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
      opacity: 1,
    });

    animation.current
      .add({
        rotateZ: 180,
        translateY: anime.stagger(-10, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(5, { grid: [10, 10], from: "center", axis: "x" }),
      })
      .add({ borderRadius: "50%" })
      .add({ opacity: 0.2, scale: 0.2 })
      .add({
        rotateZ: 180,
        opacity: 1,
        translateY: anime.stagger(10, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(-20, { grid: [10, 10], from: "center", axis: "x" }),
      })
      .add({
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        scale: 1.5,
        borderRadius: "0",
      })
      .add({ rotateZ: -90, scale: 0.45 });

  }, []);

  return (
    <Box sx={BoxOneSX}>
      <Cotainer>
        {Array.from({ length: 90 }).map((_, i) => (
          <DivOne className="divs" key={i} />
        ))}
      </Cotainer>
    </Box>
  );
};
