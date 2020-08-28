import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
// import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/Portfolio";
import ContactUs from "./components/contactus/ContactUs";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Resume /> */}
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
