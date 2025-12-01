"use client";

import React from "react";
import { Search, Settings } from "lucide-react";
import userImg from "../../../../public/userdash.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/feature/auth/authSlice";
import { baseApiSlice } from "@/lib/store/apiSlice";
import { useLogoutMutation } from "@/lib/feature/auth/authThunk";
import Swal from "sweetalert2";

interface DashboardHeaderProps {
    children?: React.ReactNode;
    title?: string;
    desc?: string;
}


const DashboardHeader = ({ children, title, desc }: DashboardHeaderProps) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const pathname = usePathname();
    const [logoutApi] = useLogoutMutation();
    const { user, isAuthenticated } = useSelector(
        (state: RootState) => state.auth
    );

    const handleAdminLogout = async () => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out of your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#22c55e",
            background: "#1e1e1e",
            color: "#fff",
        });

        if (!confirm.isConfirmed) return;

        try {
            await logoutApi().unwrap();

            dispatch(logout());
            dispatch(baseApiSlice.util.resetApiState());
            localStorage.clear();
            sessionStorage.clear();
            
            router.push("/");
            Swal.fire({
                icon: "success",
                title: "Logged Out",
                text: "You have been logged out successfully.",
                timer: 1800,
                showConfirmButton: false,
                background: "#1e1e1e",
                color: "#fff",
            });

            // setTimeout(() => {
            // }, 1200);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Logout Failed",
                text: "Something went wrong. Try again.",
                background: "#1e1e1e",
                color: "#fff",
            });
        }
    };




    return (
        <div className="mb-7">
            <div className="flex justify-between items-center rounded-md px-2 py-1 ">
                <div className="relative w-full max-w-2xl">

                    <h2 className="text-[36px] mt-1 font-semibold !text-white">
                        {title}
                    </h2>
                    <p className="text-gray-200 text-[14px]"> {desc}</p>
                </div>

                {/* RIGHT SIDE — Icons + Profile */}
                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-4">
                            <button onClick={handleAdminLogout}
                                className="w-max border-[1.5px] border-green-500 font-[600] text-[13.5px] rounded-full px-8 py-2.5 cursor-pointer hover:bg-green-600 hover:scale-105 text-white transition-all duration-300">
                                Logout
                            </button>
                    </div>
                    {/* Profile */}
                    <div className="flex items-center gap-3">
                        <Link href={"/Dashboard/UserProfile"}>
                            <Image
                                src={userImg}
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover border border-gray-300"
                            /></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DashboardHeader;
