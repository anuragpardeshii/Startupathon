// Home.js
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Challenges from "./Challenges";
import Guide from "./Guide";
import Completed from "./Completed";
import Mentor from "./Mentor";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-[#010002]">
      <Navbar />
      <Hero />
      <Challenges />
      <Guide />
      <Completed />
      <Mentor />
      <Footer />
    </div>
  );
}
