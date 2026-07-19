import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SiteLayout from "@/components/SiteLayout";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jost",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Kaveri Restaurants | Pure Veg Fine Dining",
  description: "Experience the finest vegetarian dining in Ranchi. A legacy of authentic flavors, premium ingredients, and unforgettable culinary moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jost.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        <Providers>
          <SiteLayout>
            {children}
          </SiteLayout>
        </Providers>
      </body>
    </html>
  );
}
