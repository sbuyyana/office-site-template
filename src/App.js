import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { News } from "./components/news";
import { Company } from "./components/company";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Company data={landingPageData.Services} />
      <News data={landingPageData.News} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
}

export default App;
