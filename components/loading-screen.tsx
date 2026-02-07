"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  children: React.ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
