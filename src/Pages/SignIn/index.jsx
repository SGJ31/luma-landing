//import { NavLink } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid"

function SignIn() {
    return (
      <div>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen">
          <div className="rounded-lg bg-white/10 w-80 h-80 border border-white/20">
          <div className="felx flex-col">                   
            <ArrowLeftEndOnRectangleIcon className="w-6 h-6 text-slate-300"/>
            <h1 className="text-lg font-medium text-white/90">Welcome to Luma</h1>
          </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SignIn