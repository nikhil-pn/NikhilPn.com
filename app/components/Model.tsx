import React, { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export default function Model(): JSX.Element {
  const { viewport } = useThree();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft.days === undefined) {
      // Event has started
      console.log("Send Resign Letter");
    } else {
      timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function calculateTimeLeft(): TimeLeft {
    const eventDate = new Date("2025-08-17T11:00:00"); // 11:00 AM on Aug 17, 2024
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <group scale={viewport.width / 2}>
      <Font timeLeft={timeLeft} />
    </group>
  );
}

function Font({ timeLeft }: { timeLeft: TimeLeft }): JSX.Element {
  const src = "/fonts/PPNeueMontreal-Bold.otf";
  const textOption = {
    color: "white",
    anchorX: "center" as const,
    anchorY: "middle" as const,
  };

  const timerText =
    timeLeft.days !== undefined
      ? `${timeLeft.days}D ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
      : "Send Resign Letter!";

  return (
    <group>
      <Text font={src} position={[0, 0.3, -0.1]} fontSize={0.03} {...textOption}>
        TIME  LEFT  TO  QUIT  CORPORATE
      </Text>
      <Text font={src} position={[0, 0, -0.1]} fontSize={0.2} {...textOption}>
        {timerText}
      </Text>
    </group>
  );
}
