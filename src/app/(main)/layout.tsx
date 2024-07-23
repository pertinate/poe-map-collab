"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = useSession();
  useEffect(() => {
    console.log(window.electron);
  }, [session.data]);
  if (!window.electron) {
    return <>electron not detected</>;
  }
  return <>{children}</>;
}
