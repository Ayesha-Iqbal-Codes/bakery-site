import { useState, useEffect } from "react";
import Image1 from '../assets/images/ughh.jpg'; 
import Image2 from '../assets/images/cro.jpg';
import Image3 from '../assets/images/bake.jpg';

const Banner = () => {
  const images = [Image1, Image2, Image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);
    return () => clearInterval(intervalId);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative w-full min-h-[300px] md:h-screen">
     
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="Bakery Banner"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Left arrow */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10 p-2 rounded-full"
      >
        &#8592;
      </button>

      {/* Right arrow */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10 p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Order Now button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToMenu}
          className="text-white px-4 py-1 text-sm md:px-6 md:py-2 md:text-lg rounded-full bg-[rgba(181,136,99,0.7)] font-semibold hover:bg-[rgba(181,136,99,0.9)] transition-all duration-300"
        >
          Order Now
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
