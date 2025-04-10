import Navbar from "./components/Navbar";
import Banner from "./components/Banner"; 
import OurStory from "./components/OurStory";
import BestSellers from "./components/BestSellers";
import FullMenu from "./components/FullMenu";
import Faqs from "./components/FAQs";
import Contactus from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f3e5ab] text-[#4e342e]">
      {/* Navbar */}
      <Navbar />
      
      {/* Banner */}
      <Banner />

      {/* Our story */}
      <OurStory />

       {/* Best sellrs */}
       <BestSellers />

        {/* Full Menu */}
        <FullMenu />

        {/* FAQs */}
          <Faqs />

        {/* Contact Us */}
          <Contactus />

          

         {/* Footer */}
         <Footer /> 

    </div>
  );
}

export default App;
