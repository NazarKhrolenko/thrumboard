import React, { useEffect, useState } from "react";

const TypewriterText: React.FC = () => {
  const fullText =
    "An AI-powered, minimalist team dashboard that unifies productivity, communication, and performance metrics across tools like Asana, Trello & Monday.com.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const delayBeforeStart = 500; // 0.4s
    const startTyping = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < fullText.length) {
            return prev + fullText.charAt(prev.length);
          } else {
            clearInterval(typingInterval);
            return prev;
          }
        });
      }, 15);
    }, delayBeforeStart);

    return () => clearTimeout(startTyping);
  }, []);

  return (
    <div className="max-w-[450px] h-20">
      <p className="font-sans">{displayedText}</p>
    </div>
  );
};

export default TypewriterText;
