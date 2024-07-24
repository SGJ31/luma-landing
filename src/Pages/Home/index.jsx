import "./Home.css";
import Navbar from "../../Components/Navbar/index";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Phone_Home from "../../assets/phone-home.png";
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-1/2 items-center justify-center">
          <div>
            <div className="mb-5 flex items-center">
              <p className="font-medium text-3xl text-white/40 text-center">luma</p>
              <SparklesIcon className="h-4 w-4 text-white/60 ml-2" />
            </div>
            <div className="flex flex-col text-start">
              <h1 className="font-medium text-6xl text-white/90">Delightful</h1>
              <h1 className="font-medium text-6xl text-white/90">events</h1>
              <h1 className="text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">start here.</h1>
              <p className="text-lg font-medium text-white/70">Set up a event page, invite friends and</p>
              <p className="text-lg font-medium text-white/70">sell tickets. Host a memorable event</p>
              <p className="text-lg font-medium text-white/70 mb-6">today</p>
              <div className="bg-white w-24 text-black font-medium py-2 px-5 rounded-lg">
                <NavLink to='/sign-in'>                       
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={Phone_Home} alt="phone-home" />
        </div>
      </div>
    </div>
  );
}

export default Home;






