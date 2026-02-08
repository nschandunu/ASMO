import { Suspense } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0F172A] flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        {/* Navigation and Footer blocks have been removed. 
            The layout now serves as a clean vessel for your protected content.
        */}
        <div className="flex-1 flex flex-col w-full">
          {children}
        </div>
      </div>
    </main>
  );
}