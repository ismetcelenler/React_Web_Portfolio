import React, { useState, useEffect } from "react";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
//WelcomePopup kaldırıldı
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Yükleme animasyonu için kısa bir bekleme
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 overflow-x-hidden">
      {showLoading ? (
        <div className="fixed inset-0 bg-white dark:bg-gray-950 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-2xl font-semibold text-primary">Yükleniyor...</h2>
          </div>
        </div>
      ) : (
        <>
          <ParticleBackground />
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          <ScrollToTop />
          {/* WelcomePopup kaldırıldı */}
        </>
      )}
    </div>
  );
}

export default App;