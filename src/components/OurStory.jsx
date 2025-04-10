import OurStoryImage from "../assets/images/our.jpg"; // Update path if needed

const OurStory = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#2C1A15] to-[#4B2B16] pt-14 pb-2 md:pb-12 px-4 md:px-16" id="ourstory">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Left - Vertical Image */}
        <div className="md:w-[40%] w-full flex justify-center">
          <img
            src={OurStoryImage}
            alt="Our Story"
            className="h-[300px] sm:h-[400px] md:h-[500px] w-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right - Text (Always Centered) */}
        <div className="md:w-[60%] w-full flex flex-col items-center text-center">
          {/* Welcome Message */}
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-[#fff9e8]">
          ⤛Welcome to Our Bakery⤜ <br /> Where Every Bite Tells a Story
          </h2>

          {/* Paragraph - Slightly lighter for contrast */}
          <p className="text-base sm:text-lg md:text-lg text-[#EBCEBB] leading-relaxed mt-6 max-w-xl">
            From humble beginnings to heartfelt treats, our passion for baking is
            rooted in family traditions and a love for good food. Every loaf,
            pastry, and cake we make is crafted with care, quality, and a sprinkle
            of joy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
