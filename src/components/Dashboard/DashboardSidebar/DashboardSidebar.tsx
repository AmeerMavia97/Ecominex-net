"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Image from "next/image";

export default function Sidebar({ menu, onLogout }: any) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="bg-[#1b1b1b]">
      <motion.aside
        animate={{ width: collapsed ? 80 : 250 }}
        className="text-white h-screen bg-[#1b1b1b] overflow-hidden relative"
      >
        <div className="fixed bg-[#1b1b1b] w-max h-screen px-4.5 py-6.5 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <Link href="/" className="flex items-center space-x-3 px-2 pt-2">
              {!collapsed && <span className="text-[31px] font-bold">Ecomine</span>}
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-green-500">
                <span className="text-xl font-bold">X</span>
              </div>
            </Link>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 bg-[#323232] rounded-full -right-7 top-20 absolute transition"
            >
              {collapsed ? <ChevronRight className="text-white" /> : <ChevronLeft className="text-white" />}
            </button>
          </div>

          {/* Menu */}
          <nav className="space-y-1.5 flex-1">
            {menu.map((item: any, idx: number) => {
              const Icon = item.icon;
              const active = pathname === item.link;

              return (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={() => item.label === "Logout" && onLogout()}
                  className={`flex items-center gap-3 py-3 font-[500] px-2 relative transition ${
                    active ? "text-green-500" : "text-gray-300 hover:text-green-500"
                  }`}
                >
                  <div
                    className={`border-l-3 rounded-r-xl absolute -left-5 ${
                      active ? "bg-green-500 text-green-500" : "bg-transparent text-transparent"
                    } border-green-600/20 h-full w-[7px]`}
                  >
                    .
                  </div>
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="font-medium text-[15.8px]">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto">
            {!collapsed ? (
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <Image src="/userdash.jpg" width={40} height={40} alt="image" className="rounded-full" />
                <div>
                  <p className="text-sm font-semibold">{user?.firstName + " " + user?.lastName}</p>
                  <p className="text-xs text-gray-400">{user?.role}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center pt-4 border-t border-white/10">
                <Image src="/userdash.jpg" width={40} height={40} alt="image" className="rounded-full" />
              </div>
            )}
          </div>
        </div>
      </motion.aside>
    </div>
  );
}
