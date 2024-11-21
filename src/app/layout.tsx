import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import MobileNavBar from "@/components/common/MobileNavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export const metadata: Metadata = {
  description:
    "Rowantek (RT): Tech startup specializing in real-time, connected embedded systems and addon hardware for sensor data, processing, control, and cloud storage.",
  keywords: [
    "Rowantek",
    "technology",
    "news",
    "trends",
    "tutorials",
    "tech startup",
    "embedded systems",
    "mixed-signal systems",
    "connected embedded systems",
    "sensor data acquisition",
    "intelligent control systems",
    "cloud data storage",
    "real-time data processing",
    "embedded platform customization",
    "telecom infrastructure monitoring",
    "data center monitoring",
    "smart grid solutions",
    "building automation",
    "smart city infrastructure",
    "oil and gas monitoring",
    "alternative energy monitoring",
    "water and sanitation monitoring",
    "weather station monitoring",
    "industrial automation",
    "real-time embedded systems for telecom",
    "mixed-signal design and development",
    "hardware for data acquisition",
    "embedded firmware customization",
    "IoT for data centers",
    "wireless sensor platforms",
    "sensor data acquisition for smart cities",
    "cloud-based storage for sensor data",
    "AI-enabled reporting solutions",
    "smart city connected systems",
    "CAD/EDA design services",
    "PCB manufacturing for IoT",
    "embedded Linux systems",
    "multilayer PCB assembly",
    "firmware for embedded systems",
    "precision PCB manufacturing",
    "intelligent autonomous control systems",
    "real-time monitoring platforms",
    "cloud integration for embedded systems",
    "mixed-signal PCB design",
    "sensor data acquisition hardware",
    "cloud-enabled embedded systems",
    "B2B embedded platform provider",
    "embedded platform software libraries",
    "embedded systems for remote monitoring",
    "add-on hardware for data processing",
    "intelligent data acquisition systems",
    "autonomous control for industrial sensors",
    "turnkey embedded systems solutions",
    "sensor network platforms for telecom",
    "industrial IoT systems",
    "environmental monitoring systems",
    "customizable sensor platforms",
    "hardware for remote sensing",
    "embedded systems for energy monitoring",
    "embedded development tools",
    "sensor data to cloud integration",
    "advanced PCB design services",
    "real-time embedded solutions for B2B",
    "cloud transport for sensor data",
    "mixed-signal design tools",
    "high-quality prototype manufacturing",
    "system integrator embedded solutions",
    "real-time data acquisition platforms",
    "telecom site monitoring solutions",
    "embedded software support",
    "sensor data processing solutions",
    "sensor to cloud communication systems",
    "IoT hardware customization",
    "embedded platform integration",
    "telecom industry embedded solutions",
    "dedicated IoT platforms for industry",
    "IoT data acquisition for smart grids",
    "embedded systems for industrial use",
    "in-house PCB assembly line",
    "real-time control for embedded applications",
    "AI-based predictive analytics",
    "customizable B2B embedded hardware",
    "autonomous sensor data systems",
    "IoT platforms with cloud connectivity",
    "alarm monitoring for infrastructure",
    "embedded platform AI reporting",
    "next-gen embedded hardware",
  ],
  openGraph: {
    title: "Rowantek",
    description:
      "Stay up-to-date with Rowantek on the latest in technology and trends.",
    url: "https://www.rowantek.com",
    siteName: "Rowantek",
    type: "website",
    images: [
      {
        url: "https://www.rowantek.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rowantek Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowantek",
    description: "Discover tech insights and updates with Rowantek.",
    site: "@Rowantek",
    creator: "@Rowantek",
    images: ["https://www.rowantek.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        <MobileNavBar />
        {children}
      </body>
    </html>
  );
}
