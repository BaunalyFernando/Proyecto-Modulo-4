import React from "react";

export const UserDashboard = () => {
  const user = {
    profilePicture: "/user-avatar.png",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 123 456 7890",
    address: "123 Apple Street, Cupertino, CA",
    joinedDate: "2024-01-15",
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

      <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePicture}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-md"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600 text-lg mb-4">{user.email}</p>
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Address:</span>
            <span className="text-right">{user.address}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Joined:</span>
            <span>{user.joinedDate}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
