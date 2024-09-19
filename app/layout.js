import "./globals.css";
import { Inter, Sora } from "next/font/google";

import Nav from "@/components/Nav";
import Header from "@/components/Header";

import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SINGH FAHRZEUTECHIK",
  description:
    "Data Science, Web Development, OpenAI, Artificial Intelligence, Geo Mapping, Maps, Competition, Data Science, Next.js, TailwindCSS, React, Node.js, MongoDB, Pythoh, Pandas, Numpy, Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`page bg-black text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        {/* <TopLeftImg /> */}

        {children}
      </body>
    </html>
  );
}
