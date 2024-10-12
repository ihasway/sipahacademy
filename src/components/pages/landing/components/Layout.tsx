import { useEffect } from "react";
import Navbar from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
 useEffect(() => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 }, []);
 return (
  <>
   <Navbar />
   <main>{children}</main>
  </>
 );
};
