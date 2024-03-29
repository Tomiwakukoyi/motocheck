"use client"
import "./globals.css";
import Navbar from "@/src/component/Navbar";
import { AppContextProvider } from "@/src/app/AppContext";

// export const metadata = {
//   title: "Moto Check",
//   description: "Created by Tekkd Solutions",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className=" w-screen ">
        <AppContextProvider>
          <Navbar />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
