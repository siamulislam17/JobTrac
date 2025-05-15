import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Auhentication/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
  useEffect(() => {
        document.title = "JobTrac | Update Profile";
      }, []);


  const { user } = use(AuthContext);


  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Your profile has been updated successfully.',
          confirmButtonColor: '#6366f1'
        });
        navigate('/profile');
      })
      .catch((error) => {
        console.error('Update failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          confirmButtonColor: '#ef4444'
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-blue-300 to-emerald-300  px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
       
              name='name'
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
            <input
              type="text"
              
              name='photoURL'
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
