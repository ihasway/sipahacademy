import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/pages/landing/Landing";

export default function App() {
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
