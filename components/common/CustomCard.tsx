"use client";
import Image, { StaticImageData } from "next/image";
import { IMAGES } from "@/public/images";
import { useState, useEffect } from "react";

interface CustomCardProps {
  name: string;
  description: string;
  image?: string | StaticImageData;
  proflieLink?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  name,
  description,
  image,
  proflieLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [gradientProgress, setGradientProgress] = useState(0);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let animationFrameId: number;
    let startTime: number;
    const delay = 150; // 150ms delay before starting
    const duration = 500; // 500ms transition duration
    
    if (isHovered) {
      timeoutId = setTimeout(() => {
        startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setGradientProgress(progress);
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
        };
        animate();
      }, delay);
    } else {
      setGradientProgress(0);
    }
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);
  
  const handleClick = () => {
    window.open(proflieLink, "_blank");
  };
  
  // Calculate gradient colors based on progress
  const getGradientStyle = () => {
    // Interpolate between the two gradient states
    const startColor = `rgba(var(--secondary-rgb, 0, 0, 0), ${0.1 * (1 - gradientProgress) + 0.04 * gradientProgress})`;
    const midColor = `rgba(var(--secondary-rgb, 0, 0, 0), ${0.05 * (1 - gradientProgress) + 0.05 * gradientProgress})`;
    const endColor = `rgba(var(--secondary-rgb, 0, 0, 0), ${0.04 * (1 - gradientProgress) + 0.1 * gradientProgress})`;
    
    // Interpolate angle (135deg to 225deg, which is -45deg or 315deg)
    const angle = 135 + (gradientProgress * 90); // from bottom-right (135deg) to top-left (225deg)
    
    // Use a simpler approach with Tailwind color values
    // We'll use opacity overlays instead
    return {
      background: gradientProgress === 0 
        ? 'linear-gradient(135deg, #ffffff 0%, rgba(var(--secondary-rgb, 0, 0, 0), 0.05) 50%, rgba(var(--secondary-rgb, 0, 0, 0), 0.1) 100%)'
        : gradientProgress === 1
        ? 'linear-gradient(225deg, rgba(var(--secondary-rgb, 0, 0, 0), 0.1) 0%, rgba(var(--secondary-rgb, 0, 0, 0), 0.05) 50%, #ffffff 100%)'
        : `linear-gradient(${angle}deg, 
            rgba(${255 * (1 - gradientProgress) + 0 * gradientProgress}, ${255 * (1 - gradientProgress) + 0 * gradientProgress}, ${255 * (1 - gradientProgress) + 0 * gradientProgress}, 1) 0%,
            rgba(var(--secondary-rgb, 0, 0, 0), ${0.05}) 50%,
            rgba(var(--secondary-rgb, 0, 0, 0), ${0.1 * (1 - gradientProgress) + 0.04 * gradientProgress}) 100%)`
    };
  };
  
  // Simpler approach: use two overlapping gradients with opacity
  const baseGradient = 'linear-gradient(135deg, #ffffff 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)';
  const reversedGradient = 'linear-gradient(225deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 50%, #ffffff 100%)';
  
  return (
    <div 
      className="text-gray-800 rounded-xl p-5 sm:p-6 flex flex-col items-center w-full h-full min-h-[200px] border border-secondary/10 shadow-sm hover:shadow-md hover:border-secondary/20 relative overflow-hidden transition-all duration-500 ease-in-out"
      style={{
        background: `linear-gradient(${135 + gradientProgress * 90}deg, 
          rgba(255, 255, 255, ${1 - gradientProgress * 0.5}) 0%, 
          rgba(0, 0, 0, ${0.05 + gradientProgress * 0.05}) 50%, 
          rgba(0, 0, 0, ${0.1 - gradientProgress * 0.06}) 100%)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-20 h-20 mb-4 flex-shrink-0 ring-2 ring-secondary/20 rounded-full p-1">
        <Image
          src={image || IMAGES.profile}
          className="w-full h-full object-cover rounded-full"
          alt="Profile"
          width={80}
          height={80}
        />
      </div>

      <p className="text-base sm:text-lg text-gray-800 font-semibold text-center mb-4 break-words px-2">{name}</p>

      <div className="flex justify-between items-center w-full mt-auto pt-2">
        <p className="text-sm sm:text-base text-gray-600 font-medium">{description}</p>
        <button 
          onClick={handleClick}
          className="flex-shrink-0 ml-2 p-2 rounded-full hover:bg-secondary/10 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <Image
            src={IMAGES.Linkedin}
            className="w-5 h-5"
            alt="Linkedin"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
