import { useEffect, useState } from 'react';
import './css/TypingTextAnimator.css';

const TypingTextAnimator = ({ texts, typingSpeed = 100, delay = 1500 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + texts[textIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, typingSpeed);

    if (charIndex === texts[textIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCharIndex(0);
        setDisplayText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);

  return (
    <div className="typing-container">
      <span className="typing-text">{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingTextAnimator;
