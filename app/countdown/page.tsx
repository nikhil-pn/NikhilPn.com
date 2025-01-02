"use client";
import dynamic from "next/dynamic";
import React from "react";

const Timer = dynamic(() => import("../components/Timer"), {
  ssr: false,
});

function TimerPage() {
  return (
    <div>
      <Timer />
    </div>
  );
}

export default TimerPage;
