import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/pages/landing/Landing";
import { useEffect } from "react";
import i18n from "./lib/i18n";

export default function App() {
 useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang");
  if (lang) {
   i18n.changeLanguage(lang);
  } else if (localStorage.getItem("lang")) {
   i18n.changeLanguage(localStorage.getItem("lang")!);
   urlParams.set("lang", localStorage.getItem("lang")!);
   window.location.search = urlParams.toString();
  }
 }, []);
 return (
  <>
   <BrowserRouter basename="/sipahacademy/">
    <Routes>
     <Route path="/" element={<Landing />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}
