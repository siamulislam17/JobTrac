import React, { use } from 'react';
import { AuthContext } from '../../Auhentication/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


const ForgotPassword = () => {
  
  const {forgetPassword} = use(AuthContext);
  // const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        Swal.fire({
                          icon: 'success',
                          title: 'Check your email',
                          text: 'Password reset email sent successfully.',
                          confirmButtonColor: '#6366f1'
                        });
                 window.open('https://mail.google.com', '_blank');  
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">Forgot Password</h2>
        <input
          type="email"
          required
          
          name='email'
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
