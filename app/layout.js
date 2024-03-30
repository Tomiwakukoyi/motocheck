import Navbar from "@/src/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Moto Check",
  description: "Built by Tekkd Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}
