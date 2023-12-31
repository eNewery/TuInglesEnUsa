"use client";
import React, { useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section4Post from "./Section4Post";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
const Landing = () => {

  return (
    <div className="landingContainer">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section4Post/>
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Landing;
