import { useEffect } from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

export const Layout = ({ children }: { children: React.ReactNode }) => {
 const { i18n } = useTranslation();
 useEffect(() => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 }, []);
 return (
  <>
   <div
    className={
     i18n.language === "ar"
      ? "!font-arabic"
      : i18n.language === "bn"
      ? "!font-bangla"
      : "!font-sans"
    }
   >
    <Navbar />
    <main>{children}</main>
   </div>
  </>
 );
};
