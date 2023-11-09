// local imports
import { Fragment } from "react";
import Categories from "./views/Categories";
import Footer from "./views/Footer";
import Hero from "./views/Hero";
import Gallery from "./views/Gallery";
import VideoSection from "./views/VideoSection";
import Services from "./views/Services";
import Products from "./views/Products";

function App() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Gallery />
      <Products />
      <Categories />
      <VideoSection />
      <Footer />
    </Fragment>
  );
}

export default App;
