import AdminProductTable from "@/components/AllProduct/ProductTable";
import UserMachineList from "@/components/Assign/MachineCatalog";
import UserMachineDashboard from "@/components/Assign/machineList";
import UserMachineProfitUpdate from "@/components/Assign/Profile";
import UserMachineAssignment from "@/components/Assign/UserMachineAssign";
import DashboardHeader from "@/components/Layouts/DashboardHeader";
import DashboardLayout from "@/components/myAccount/layout";
import ProfilePage from "@/components/UserProfile/Profile";
import React from "react";

function page() {
  return (
    <div>
        <DashboardLayout>
          <DashboardHeader />
          <ProfilePage />
        </DashboardLayout>
    </div>
  );
}

export default page;
