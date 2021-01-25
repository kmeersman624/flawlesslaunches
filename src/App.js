import React from "react";
import "./App.css";
import P1 from "../src/assets/img/team/FL.png";
import P2 from "../src/assets/img/team/SixSigma.png";
import P3 from "../src/assets/img/team/SCM.png";
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
      caption: "Published 2021",
      link: "https://www.amazon.com/Flawless-Launches-Profitable-Eric-Maass-ebook/dp/B08TPWXPVL",
    },
    {
      image: P2,
      title: "Design For Six Sigma",
      caption: "Published 2009",
      link:
        "https://www.amazon.com/Applying-Software-Hardware-Systems-paperback/dp/0133359468",
    },
    {
      image: P3,
      title: "Supply Chain Modeling",
      caption: "Published 2019",
      link: "https://www.amazon.com/Supply-Chain-Modeling-Inventory-Semiconductory-ebook/dp/B07VQ78XMX",
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
