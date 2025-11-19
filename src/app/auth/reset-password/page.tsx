// @ts-nocheck
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useLoginMutation } from "@/lib/feature/auth/authThunk";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/lib/feature/auth/authSlice";
import "react-toastify/dist/ReactToastify.css";
import "@/css/style.css";
import { store } from "@/lib/store/store";
import { motion } from "framer-motion"; // 🪄 Animation library

interface LoginError {
  status?: number;
  data?: {
    message?: string;
  };
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials(userData));
      toast.success("Login successful!");
      setTimeout(() => {
        const authState = store.getState().auth;
        router.push("/Dashboard/");
      }, 100);
      localStorage.setItem("IsAuthenticate", "true")
      localStorage.setItem("token", userData.token)
    } catch (error) {
      const err = error as LoginError;
      if (err?.status === 404) {
        toast.error("User not found, please sign up.");
      } else if (err?.status === 400) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div className="relative  overflow-hidden bg-[#000]">
      <ToastContainer />

      {/* 🟢 Animated Ambient Glows
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bg-[#22c55e] -right-10 top-20 blur-[140px] opacity-50 h-[300px] w-[220px]"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bg-[#22c55e] -left-10 bottom-10 blur-[140px] opacity-50 h-[300px] w-[220px]"
      ></motion.div> */}

      <div className="grid grid-cols-2 min-h-screen">
        <div className="bg-[#000]  h-full flex flex-col gap-5 justify-center">

          <div>
            <img src="" alt="" />
          </div>

          <div>
            <h1  className="text-[#dad8e6] font-[500] text-[30px] fonts-Roboto">Check your email</h1>
            <p>If an account exists for a.fedorov@email.com, you'll receive an email with a reset password link.</p>
            <p>Check your inbox and follow the reset password link.</p>
            <button>Return to login</button>
          </div>
        </div>

        <div className="bg-[#0f130e] rounded-l-[10px] h-full">

        </div>
      </div>

    </div>
  );
}
