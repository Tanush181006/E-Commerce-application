import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = ({ cartCount, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div className="flex flex-col items-center py-12">

        <h1 className="text-5xl font-bold">
          ZenMart
        </h1>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <Link to="/category/electronics">
            <div className="bg-white rounded-xl shadow-lg w-72 h-72 flex flex-col justify-center items-center hover:scale-105 transition">

              <div className="text-7xl">
                💻
              </div>

              <h2 className="text-black text-3xl font-bold mt-6">
                Electronics
              </h2>

            </div>
          </Link>     

          

          <Link to="/category/watches">
            <div className="bg-white rounded-xl shadow-lg w-72 h-72 flex flex-col justify-center items-center hover:scale-105 transition">

              <div className="text-7xl">
                ⌚
              </div>

              <h2 className="text-black text-3xl font-bold mt-6">
                Watches
              </h2>

            </div>
          </Link>
           <Link to="/category/shoes">
            <div className="bg-white rounded-xl shadow-lg w-72 h-72 flex flex-col justify-center items-center hover:scale-105 transition">

              <div className="text-7xl">
                👟
              </div>

              <h2 className="text-black text-3xl font-bold mt-6">
                Shoes
              </h2>

            </div>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;