
import React, { use, useEffect } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Auhentication/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {

  useEffect(() => {
          document.title = "JobTrac | LogIn";
        }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const { logIn, signInWithGoogle,user } = use(AuthContext);
  console.log(user);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value; 

    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
                  icon: 'success',
                  title: 'Loged in!',
                  text: 'You have successfully logged in.',
                  confirmButtonColor: '#6366f1'
                });
        navigate(location.state || '/');        


      })
      .catch((error) => {
        console.error(error);
         Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  confirmButtonColor: '#ef4444'
                });
      });  
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
                  icon: 'success',
                  title: 'Loged in!',
                  text: 'You have successfully logged in.',
                  confirmButtonColor: '#6366f1'
                });
         navigate(location.state || '/');              
        
      })
      .catch((error) => {
        Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  confirmButtonColor: '#ef4444'
                });
      });
  };

  
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h2>
        <form onSubmit={handleLogIn}  className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <MdEmail size={20} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full focus:outline-none"
              name='email'
              
              required
            />
          </div>

          


          
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              name='password'
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none"
              minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              required
            />
          </div>

          <div><Link to={'/forgotten-password'} className="text-indigo-600 hover:text-indigo-800 transition duration-300 text-sm font-semibold">Forget your password?</Link></div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>


        </form>

        {/* Google */}
        <button onClick={handleGoogleSignIn} className="btn w-full mt-5 rounded-lg bg-white hover:bg-gray-100 text-black border-[#c0c0c0]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Login with Google
        </button>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account? <Link to={'/SignUp'} className="text-indigo-600 font-medium hover:underline cursor-pointer">Register</Link>
        </p>
      </div>
      
    </div>
  );
};

export default LogIn;