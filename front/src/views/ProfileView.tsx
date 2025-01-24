"use client";

import { useAuth } from "@/context/Auth.Context";

export const ProfileView = () => {
    const {userData} = useAuth();
  return (
    <div>
        <h1>Welcome to your profile page</h1>
        <p>Your address direction is: {userData?.user.address}</p>
        <p>Your phone ir: {userData?.user.phone}</p>
    </div>
  )
}

export default ProfileView;