import React from "react";
import "./App.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
import Testimonials from "./components/testimonials/testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
