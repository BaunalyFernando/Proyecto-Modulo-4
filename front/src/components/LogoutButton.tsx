"use client";
import { useAuth } from "@/context/Auth.Context";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const LogoutButton = () => {
  
    const { setUserData} = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userSession");    
    Cookies.remove("userData");
    router.push("/");
    alert("You have been logged out successfully");
  }

  return (
    <button onClick={handleLogout} className="btn-primary">
      Logout
    </button>
  )
}