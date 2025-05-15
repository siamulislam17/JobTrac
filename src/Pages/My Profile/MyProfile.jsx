import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Auhentication/AuthProvider';
import { useNavigate } from 'react-router';

const MyProfile = () => {
  useEffect(() => {
          document.title = "JobTrac | My profile";
        }, []);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-sm w-full text-center">
        <img
          src={user?.photoURL || 'https://i.ibb.co/0jqHpnp/default-avatar.png'}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          {user?.displayName || 'User Name'}
        </h2>
        <p className="text-gray-500 mb-4">{user?.email}</p>
        <div className="text-sm text-gray-600 mb-4">
          <p><span className="font-medium">UID:</span> {user?.uid}</p>
        </div>
        <button
          onClick={() => navigate('/update-profile')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
