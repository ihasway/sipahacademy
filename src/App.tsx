import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/pages/landing/Landing";
import { useEffect } from "react";
import i18n from "./lib/i18n";
import { Products } from "./components/pages/landing/Products";
import { ProductView } from "./components/pages/landing/ProductView";
import { Layout } from "./components/pages/landing/components/Layout";

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
     <Route
      path="/"
      element={
       <Layout>
        <Landing />
       </Layout>
      }
     />
     <Route
      path="/products"
      element={
       <Layout>
        <Products />
       </Layout>
      }
     />
     <Route
      path="/product/:id"
      element={
       <Layout>
        <ProductView />
       </Layout>
      }
     />
    </Routes>
   </BrowserRouter>
  </>
 );
}
