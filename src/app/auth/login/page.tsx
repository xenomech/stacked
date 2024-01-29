"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function Login() {
  return (
    <button
      onClick={() => {
        signIn("github", { callbackUrl: "/app" });
      }}
    >
      <span>Continue with Github</span>
    </button>
  );
}
