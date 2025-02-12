"use client";

import { useAuth } from "@/context/Auth.Context";

export const ProfileView = () => {
  const { userData } = useAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-4xl font-semibold">Welcome to your profile page</h1>
      <div className="mt-4 text-lg text-gray-500">
        <p>Your address is: <span className="font-medium text-gray-700">{userData?.user.address}</span></p>
        <p>Your phone is: <span className="font-medium text-gray-700">{userData?.user.phone}</span></p>
      </div>
    </div>
  );
};

export default ProfileView;
