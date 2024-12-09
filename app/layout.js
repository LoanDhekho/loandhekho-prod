import "./globals.css";
import localFont from "next/font/local";
import 'antd/dist/reset.css';
import Header from "./components/Header";
import ClientWrapper from "./components/ClientWrapper";
// import { Styles } from "./styles/styles";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "LoanDekho.com",
  description: "India's Leading Finance Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
        {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
