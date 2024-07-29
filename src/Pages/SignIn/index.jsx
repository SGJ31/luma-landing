import React from 'react';
import { useNavigate } from 'react-router-dom';
import  {AuthProvider, useAuth} from '../../context/AuthContext'; 
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import Navbar from '../../Components/Navbar';


function SignIn() {
    const auth = useAuth();
    const navigate = useNavigate();


    const handleGoogle = async (e) => {
      e.preventDefault();
      try {
        await auth.loginWithGoogle(e);
        const { photoURL } = auth.user;
        console.log("Photo URL:", photoURL);
        navigate('/events', { state: { photoURL: photoURL } });
        console.log("Usuario inició sesión con Google");
        console.log(auth.user);
      } catch (error) {
      }
    }

    return (
        <AuthProvider>
            <div className='flex justify-center items-center h-screen'>
            <Navbar/>
                <div className='flex flex-col rounded-lg bg-zinc-800 border border-white/20 p-6'>
                  <div 
                      className=" rounded-full bg-white/20 w-14 items-center justify-center flex h-14 mb-3">
                      <ArrowLeftEndOnRectangleIcon className="w-9 h-9 text-white/90"/>
                  </div>
                  <h1 className='text-xl font-bold text-white mb-2'>Welcome to luma</h1>
                  <p className='text-sm font-medium text-white/80 mb-9'>Please sign in or sign up below.</p>
                  <button 
                    className='flex items-center bg-black/20 text-white/70 font-medium py-2 px-7 rounded'
                    onClick={
                      (e) => {
                        handleGoogle(e);
                      }
                    }>
                      <img 
                          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
                          alt="Google logo" 
                          className='h-6 w-6 mr-2 filter grayscale' 
                      />
                      Sign In with Google
                  </button>

                </div>
            </div>
        </AuthProvider>
        
    )
  }
  
  export default SignIn