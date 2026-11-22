import type { Metadata } from "next";
import "./v2.css";

export const metadata: Metadata = {
  title: "Vidhi Jain — Physiotherapist",
  description:
    "Musculoskeletal physiotherapy in Indore. Assessment, manual treatment and a programme you can follow.",
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return <div className="v2">{children}</div>;
}
