import { getServerAuthSession } from "@/server/auth";
import React, { PropsWithChildren } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";

interface AuthLayoutProps extends PropsWithChildren {}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  noStore();
  const session = await getServerAuthSession();
  if (session) {
    redirect("/app");
  }
  return <main>{children}</main>;
}
