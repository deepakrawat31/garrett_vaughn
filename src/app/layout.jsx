import localFont from "next/font/local";
import "./globals.css";

const epilogue = localFont({ src: "../fonts/Epilogue.woff2" });
const rofane = localFont({
  src: "../fonts/Rofane.woff2",
  variable: "--font-rofane",
});

export const metadata = {
  title: "Garrett Vaughn",
  description: "Landing page with animation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} ${rofane.variable} bg-zinc-900 text-zinc-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
