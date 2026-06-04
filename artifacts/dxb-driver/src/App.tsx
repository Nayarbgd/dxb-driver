import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import WhyChooseUs from "@/pages/WhyChooseUs";
import BookInAdvance from "@/pages/BookInAdvance";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function AnimatedRoutes() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/why-choose-us" component={WhyChooseUs} />
          <Route path="/book-in-advance" component={BookInAdvance} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <LanguageProvider>
        <MobileMenuProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <ScrollProgressBar />
                <Router />
                <FloatingWhatsApp />
              </WouterRouter>
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </MobileMenuProvider>
      </LanguageProvider>
    </MotionConfig>
  );
}

export default App;
