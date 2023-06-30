"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Fish from "../public/fish.png";
import Ramen from "../public/ramen.png";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Slider from "@/components/Slider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import History from "@/components/History";
import AdvMenu from "@/components/AdvMenu";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    const handleScroll = (e) => {
      console.log(e);
    };

    lenis.on("scroll", handleScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="flex">
      <div className="flex-col items-center sm:min-w-screen sm:w-full">
        <Navbar />
        <Hero />
        <About />
        <Slider />
        <History />
        <AdvMenu />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
