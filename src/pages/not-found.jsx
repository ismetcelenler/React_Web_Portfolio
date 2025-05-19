import React from "react";
import { Link } from "wouter";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-8 mb-4">
        Sayfa Bulunamadı
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

export default NotFound;