"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
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

  useEffect(() => {
    AOS.init();

    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

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
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </main>
  );
}
