import Navbar from "./components/Navbar";
import Banner from "./components/Banner"; // Import the new Banner component

function App() {
  return (
    <div className="min-h-screen bg-[#f3e5ab] text-[#4e342e]">
      {/* Navbar */}
      <Navbar />
      
      {/* Banner */}
      <Banner />

      {/* Main content */}
      <main className="pt-20 px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Sweet Bites Bakery</h1>
        <p className="text-lg text-center">
          Freshly baked goods made with love and the finest ingredients.
        </p>
      </main>
    </div>
  );
}

export default App;
