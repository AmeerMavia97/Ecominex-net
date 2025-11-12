
import { AdminNavbar } from "@/components/AdminNavbar";
import AdminUsersPage from "@/components/AllProduct/AllUser";
import ProtectedRoutes from "@/components/config/protectedRoute/ProtectedRoutes";
import DashboardHeader from "@/components/Layouts/DashboardHeader";
import DashboardLayout from "@/components/myAccount/layout";


function Page() {

  return (
      <DashboardLayout>
        <DashboardHeader />
        <AdminUsersPage />
      </DashboardLayout>
  );
}

export default Page;
