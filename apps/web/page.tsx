"use client";
import { useEffect } from "react";
import Features from "./app/components/features";
import Footer from "./app/components/footer";
import Header from "./app/components/header";
import Hero from "./app/components/hero";
import Pricing from "./app/components/pricing";
import WhyUs from "./app/components/whyUs";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
