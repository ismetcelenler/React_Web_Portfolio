import React, { useState, useEffect } from 'react';

function TypedText({ texts, typingSpeed = 150, backspaceSpeed = 50, pauseDuration = 1000 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      if (currentIndex < texts[currentTextIndex].length) {
        // Yazma işlemi
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      } else {
        // Yazma tamamlandı, bekleme periyodu
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (currentIndex > 0) {
        // Silme işlemi
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, backspaceSpeed);
      } else {
        // Silme tamamlandı, bir sonraki metne geç
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isTyping, texts, typingSpeed, backspaceSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="border-r-2 border-primary ml-1 animate-pulse">&nbsp;</span>
    </span>
  );
}

export default TypedText;