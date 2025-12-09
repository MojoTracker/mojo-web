import { Link } from "react-router-dom";
import whiteArrow from "/assets/images/arrow-white.png";
import blackArrow from "/assets/images/arrow-black.png";

import { useState } from "react";

export default function ActionButtons() {
  const [isHovered, setIsHovered] = useState(false);

  const currentImage = isHovered ? whiteArrow : blackArrow;

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  }


  return (
    <div className="flex flex-row gap-5 font-nature-regular">
      <Link to="/download">
        <button onMouseEnter={handleHover} onMouseLeave={handleUnhover} className="flex gap-4 bg-white text-black px-10 py-3 rounded-xl text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">
          <p>Download</p>
          <img src={currentImage} alt="" className="w-7 h-7" />
        </button>
      </Link>
      <Link to="/about">
        <button onMouseEnter={handleHover} onMouseLeave={handleUnhover} className="flex gap-4 bg-white text-black px-10 py-3 rounded-xl text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 ease-in-out">
          <p>Learn more</p>
          <img src={currentImage} alt="" className="w-7 h-7" />
        </button>
      </Link>
    </div>
  )
}