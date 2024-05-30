import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>                      
                        Luma
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li  className='font-semibold text-mg text-gray-500'>
                    <NavLink  
                        to='/explore-events'
                    >                       
                        Explore Events  ↗
                    </NavLink>
                </li>
                <li className='bg-gray-400 text-white py-1 px-2 rounded-full focus:outline-none btn-xs'>
                    <NavLink  
                        to='/sign-in'
                    >                       
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar