import type { Metadata } from "next";
import "./v3.css";

export const metadata: Metadata = {
  title: "Vidhi Jain — Physiotherapist",
  description:
    "Book physiotherapy in Indore. Back, neck, joint and sports injuries treated by Dr. Vidhi Jain.",
};

export default function V3Layout({ children }: LayoutProps<"/v3">) {
  return <div className="v3">{children}</div>;
}
