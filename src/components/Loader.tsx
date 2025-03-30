"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  const loadingStates = ["Loading.", "Loading..", "Loading..."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % loadingStates.length);
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(interval);
    };
  }, [loadingStates.length]);

  if (progress >= 100) return;

  return (
    <div className="fixed w-screen h-screen overflow-hidden z-[999] flex items-center justify-center bg-base-100">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.gif"
          alt="logo loader"
          className="w-96 h-96 mb-6 rounded-2xl border"
          width={1980}
          height={1980}
        />
        <p className="text-lg font-medium mb-4">{loadingStates[index]}</p>
        <div className="flex gap-2 items-center w-full">
          <progress
            max={100}
            value={progress}
            className="progress progress-primary w-full"
          />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
