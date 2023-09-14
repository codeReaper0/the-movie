"use client";
import "public/assets/css/main.css";
import {ToastContainer} from "react-toastify";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
