import React, { useState, useEffect } from 'react';

function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300"
      onClick={handleClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md shadow-2xl transform transition-all duration-700 ease-out animate-bounce-slow"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="mb-4">
            <i className="fas fa-hand-wave text-4xl text-primary animate-pulse"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Hoş Geldiniz!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Portfolyo siteme ziyaretiniz için teşekkür ederim. Benimle ilgili daha fazla bilgi edinmek için sayfayı aşağı kaydırın.
          </p>
          <button
            onClick={handleClose}
            className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Gezinmeye Başla
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;