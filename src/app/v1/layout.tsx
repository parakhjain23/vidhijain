import type { Metadata } from "next";
import "./v1.css";

export const metadata: Metadata = {
  title: "Vidhi Jain — Physiotherapist",
  description:
    "Hands-on physiotherapy for back, neck, joint and sports injuries in Indore.",
};

export default function V1Layout({ children }: LayoutProps<"/v1">) {
  return <div className="v1 flex min-h-screen flex-col">{children}</div>;
}
