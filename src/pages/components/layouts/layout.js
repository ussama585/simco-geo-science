import Footer from "./footer";
import Header from "./header";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={openSans.className}>{children}</main>
      <Footer />
    </>
  );
}