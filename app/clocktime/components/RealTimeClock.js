"use client";

import { useState, useEffect } from "react";

export default function RealTimeClock() {
  const [time, setTime] = useState(new Date());
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => setTime(new Date()), 1000);

    // Update width on resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gradient-to-br from-purple-600 to-pink-500 text-center rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-4">📅 Real-Time Clock</h1>
      <p className="text-2xl font-mono mb-2">{time.toLocaleTimeString()}</p>
      <p className="text-lg mt-4">📐 Window Width: <span className="font-semibold">{width}px</span></p>
    </div>
  );
}
