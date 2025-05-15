import React, { use, useState } from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaConciergeBell, FaBlog, FaUser, FaGoogle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { Link,  NavLink } from 'react-router';
import { AuthContext } from '../../Auhentication/AuthProvider';
import Swal from 'sweetalert2';


const NavBar = () => {
  const {signInWithGoogle} = use(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); 
  
  const handleGoogleSignIn = () => {
  signInWithGoogle()
    .then((result) => {
      const user = result.user;
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'You have successfully logged in',
        confirmButtonColor: '#6366f1'
      });
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        confirmButtonColor: '#6366f1'
      });
    });
};


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };


  const {user,logOut} = use(AuthContext);
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        
        Swal.fire({
                                icon: 'success',
                                title: 'Congratulations!',
                                text: 'Loged out successfully',
                                confirmButtonColor: '#6366f1'
                              });
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  }
  const Links = (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaHome /> Home
      </NavLink>
      
      <NavLink to="/FaQs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaBlog /> Faqs
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 shadow-sm">
       

        {/* Mobile Menu Button  */}
      <div className="flex md:hidden items-center gap-2">
        <button onClick={toggleMenu} className="text-2xl text-primary hover:text-purple-600">
          <FaBars />
        </button>
      </div>
      {/*  Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300">
          <Link to="/" className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            JobTrack
          </Link>
        </a>
      </div>

      

      {/* Mobile Menu */}
      
      <div className={` md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute   top-16 left-0 w-full bg-base-100 shadow-lg z-10 flex flex-col items-start px-4 py-4 gap-2">
          {Links}
          {
            !user ? (
            <><Link to="/login" className="btn mt-2 w-full px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md transition duration-300 ease-in-out hover:from-blue-500 hover:to-emerald-500 hover:shadow-lg">
            LogIn
          </Link>
          <Link to="/signup" className="btn mt-2 w-full px-5 py-2 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-md transition duration-300 ease-in-out from-blue-500 to-emerald-500 hover:shadow-lg">
            SignUp
          </Link>


          <button onClick={handleGoogleSignIn} className="flex mt-2 items-center w-full  justify-center gap-2  py-2 rounded-2xl bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-md transition">
          <FaGoogle className=" text-md" />
          <span className="font-sm">Google</span>


        </button>

          </>) :
          (<Link to="/" className="btn mt-2 w-full px-5 py-2 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-md transition duration-300 ease-in-out from-blue-500 to-emerald-500 hover:shadow-lg">
            Log Out
          </Link>)
          }
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-3 items-center font-medium">
        {Links}
        {
          !user ? (
          <><Link
            to="/login"
            className="btn px-5 py-2 h-10 ml-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md transition duration-300 ease-in-out hover:from-blue-500 hover:to-emerald-500 hover:shadow-lg"
          >
            LogIn
          </Link>

          <Link
            to="/signup"
            className="btn px-5 py-2 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-md transition duration-300 ease-in-out hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
          >
            SignUp
          </Link>

          <button
          onClick={handleGoogleSignIn} 
            className="flex  items-center justify-center w-full gap-2  px-4 py-2 rounded-3xl bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-md transition"
          >
            <FaGoogle className="text-red-500 text-lg" />
            <span className="font-medium">Sign in with Google</span>
          </button>

          </>) 

           :
          (<Link to="/" onClick={handleLogOut} className="btn px-5 py-2 h-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-md transition duration-300 ease-in-out from-blue-500 to-emerald-500 hover:shadow-lg">
            Log Out
          </Link>)

          }
      </div>

      {/* Avatar (User Profile) */}
     {user && (
      user.photoURL ? (
        <Link to="/profile">
          <img
        
          className="w-9 h-9 rounded-full ml-2"
          alt="User avatar"
          src={user.photoURL}
        /></Link>
      ) : (
        <Link to="/profile" className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center ml-2">
          <FaUser className="text-gray-500" />
        </Link>
      )
    )}

  </div>
  );
};

export default NavBar;
