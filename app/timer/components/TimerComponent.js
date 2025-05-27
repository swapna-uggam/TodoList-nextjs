'use client';

import { useEffect, useState } from "react";

export default function TimerComponent() {
  const [count, setCount] = useState(0);
  const [timeoutMessage, setTimeoutMessage] = useState("");

  // Logs on every update
  useEffect(() => {
    console.log("Component mounted or updated");
  });

  // Logs only on mount and cleanup on unmount
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Timeout after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutMessage("Timeout reached after 3 seconds!");
      console.log("Timeout executed");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Interval: Increase count every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("Interval tick");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm text-center">
      <h2 className="text-xl font-semibold text-green-600 mb-2">Count: {count}</h2>
      {timeoutMessage && <p className="text-gray-700">{timeoutMessage}</p>}
    </div>
  );
}
