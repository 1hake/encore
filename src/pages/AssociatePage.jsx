import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { HeaderAssociate } from "../components/headerAssociate";
import { AboutAssociate } from "../components/aboutAssociate";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const AssociatePage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <HeaderAssociate data={landingPageData.HeaderAssociate} />
      <AboutAssociate data={landingPageData.AboutAssociate} />
      <Team data={landingPageData.Team}></Team>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

