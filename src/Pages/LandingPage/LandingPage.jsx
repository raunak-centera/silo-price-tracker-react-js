// pages/LandingPage.jsx
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

const LandingPage = () => (
  <>
    <>
      <Header />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="search-section" className="pt-5">
        <SearchBar />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <CallToAction />

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <Footer />
    </>
  </>
);

export default LandingPage;
