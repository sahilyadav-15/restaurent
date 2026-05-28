"use client";

import Countdown from "react-countdown";

const endingDate = new Date("2026-06-15");

export default function CountDown() {
  return (
    <div className="">
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={endingDate}
      />
    </div>
  );
}
