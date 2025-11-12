"use client";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { usePathname, useRouter } from "next/navigation";
import { useGetCurrentUserQuery } from "@/lib/feature/auth/authThunk";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  // const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  const IsAuthenticateds = localStorage.getItem("IsAuthenticate")

  const { data: users, isError, error, refetch } = useGetCurrentUserQuery();


  const adminRoutes = [
    "/Dashboard/AllUser/",
    "/Dashboard/Assign/",
    "/Dashboard/AllTransaction/",
    "/Dashboard/AdminTran/",
    "/Dashboard/contactUs/admin/",
  ];

  useEffect(() => {
    if (IsAuthenticateds !== "true") {
      router.replace("/auth/signin");
      return;
    }
    if (IsAuthenticateds === "true" && users?.role !== "admin" && adminRoutes.includes(pathname)) {
      router.replace("/Dashboard");
      return;
    }

  }, [IsAuthenticateds, pathname, users]);

  return <>{children}</>;
};

export default ProtectedRoutes;