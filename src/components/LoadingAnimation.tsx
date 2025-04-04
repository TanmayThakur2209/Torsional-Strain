import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";

function LoadingAnimation() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(100);
  const loadingRef = useRef<HTMLDivElement>(null);

  const ThreeDigits = (num: number) => {
    return num.toString().padStart(3, "0");
  };

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 10);

    const loadingTimer = setTimeout(() => {
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          y: "-100vh", 
          duration: 1, 
          ease: "power2.inOut",
          onComplete: () =>  {
            setIsLoading(false);
            gsap.set(loadingRef.current, { y: "0vh" });
          },});
      }
    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(counterInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        ref={loadingRef}
        className="flex items-center justify-center w-screen h-screen bg-gray-100"
      >
        <div className="animate-spin absolute items-center justify-center rounded-full h-50 w-50 border-t-4 border-blue-500 mb-4"></div>
        <div className="items-center justify-center flex">
          <p className="text-xl font-sans font-bold">Loading...</p>
          <div className="bg-black rounded-lg font-sans px-2 text-white">
            {ThreeDigits(count)}
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingAnimation;
