import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Main/Home";
import Error from "./Components/Main/Error";
import { About } from "./Components/Sub/Home_Sub/About.jsx";
import { Shop } from "./Components/Sub/Home_Sub/Shop.jsx";
import { Garment } from "./Components/Sub/Home_Sub/Garment.jsx";
import Home_Header from "./Components/Sub/Home_Sub/Home_Header.jsx";
import { Footer } from "./Components/Sub/Home_Sub/Footer.jsx";
import { Service } from "./Components/Sub/Home_Sub/Services.jsx";
import { Blogs } from "./Components/Sub/Home_Sub/Blogs.jsx";
import { Contact } from "./Components/Sub/Home_Sub/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Home_Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/garment" element={<Garment />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
