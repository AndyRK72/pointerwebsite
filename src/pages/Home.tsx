import React from "react";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  );
} 