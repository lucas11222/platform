import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import ReactLenis, { useLenis } from "lenis/react";
import Home from "./Site/Homepage/Home";
import About from "./Site/AboutPage/About";

// Lazy load app pages
const StartingPage = lazy(() => import("./Pages/StartingPage/StartingPage"));
const LinkTextPage = lazy(() => import("./Pages/LinkText/LinkTextPage"));
const BotomNavPage = lazy(() => import("./Pages/BottomNav/BottomNavPage"));
const NotFound = lazy(() => import("./Pages/404/404"));
const Terms = lazy(() => import("./Pages/Terms/Terms"));


// ScrollToTop and refresh Lenis scroll after DOM updates
function ScrollToTopAndRefreshLenis() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      setTimeout(() => {
        lenis.resize();
      }, 100);
    }
  }, [location.pathname, lenis]);

  return null;
}

// Inline external redirect component
function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <p>Redirecting...</p>;
}

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTopAndRefreshLenis />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Landing Pages without Layout */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Pages with Sidebar Layout */}
            <Route path="/app" element={<Layout />}>
              <Route index element={<Navigate to="/app/intro" />} />
              <Route path="intro" element={<StartingPage />} />
              <Route path="link-text" element={<LinkTextPage />} />
              <Route path="bottom-nav" element={<BotomNavPage />} />
              <Route path="terms" element={<Terms />} />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ReactLenis>

  );
}

export default App;
