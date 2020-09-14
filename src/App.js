import React from "react";
import "./App.css";
import P1 from "../src/assets/img/team/1.jpg";
import P2 from "../src/assets/img/team/SixSigma.png";
import P3 from "../src/assets/img/team/3.jpg";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const publicationLinks = [
    {
      image: P1,
      title: "Flawless Launches",
      caption: "Published 2020",
      link: "#",
    },
    {
      image: P2,
      title: "Six Sigma",
      caption: "Published 2009",
      link:
        "https://www.amazon.com/Applying-Software-Hardware-Systems-paperback/dp/0133359468",
    },
    {
      image: P3,
      title: "Articles",
      caption: "Authored or Co-Authored",
      link: "#",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Bio />
      <Publications publicationLinks={publicationLinks}></Publications>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
