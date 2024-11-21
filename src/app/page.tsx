import HomeBanner from "@/components/home/HomeBanner";
import HomeProducts from "@/components/home/HomeProducts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rowantek",
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProducts />
    </>
  );
}
