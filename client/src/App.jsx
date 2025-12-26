import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Lenis from "lenis";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import ProjectPage from "./components/ProjectPage";
import { siteConfig } from "./data";
gsap.registerPlugin(ScrollTrigger);

// Homepage component
const HomePage = () => {

  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionHeadings = document.querySelectorAll(".section-heading");
      sectionHeadings.forEach((heading) => {
        const headings = heading.querySelectorAll(".heading");

        headings.forEach((individualHeading) => {
          ScrollTrigger.create({
            trigger: heading,
            start: "top 550px",
            // markers: true,
            end: "bottom 550px",
            animation: gsap.to(individualHeading, {
              opacity: 1,
              y: 0,
              ease: "power4.out",
              duration: 1,
            }),
            toggleActions: "play none none none",
          });
        });
      });
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />
      </Helmet>
      <div className="bg-secondary-100">
        <NavBar sectionRefs={sectionRefs.current} />
        <Hero />
        <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
          <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
          <About />
          <Services />
          <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

// Main App with routing
const App = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  // Initialize Lenis globally
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle scroll to top or hash on route change
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(el, { immediate: true });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      window.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
