import HomeBanner from "@/components/home/HomeBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rowantek",
};

export default function Home() {
  return (
    <>
      <HomeBanner />
    </>
  );
}
