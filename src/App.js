import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Services from "./components/services/Services";
import Doctor from "./components/doctor/Doctor";
import Testimonial from "./components/testimonial/Testimonial";
import Book from "./components/book/Book";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Doctor />
      <Services />
      <Blog />
      <Testimonial />
      <Book />
      <Contact />
    </div>
  );
};

export default App;
