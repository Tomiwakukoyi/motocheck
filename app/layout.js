import Navbar from "@/src/components/Navbar";
import "./globals.css";
import { AppProvider } from "@/context/searchContext";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/src/components/Footer";

export const metadata = {
  title: "Moto Check",
  description: "Built by Tekkd Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className=" w-screen hide overflow-x-hidden">
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
