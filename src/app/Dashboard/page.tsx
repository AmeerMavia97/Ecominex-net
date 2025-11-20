import LandingLayout from '@/components/Layouts/LandingLayout'
import AssigMachineUser from '@/components/myAccount/assignProfile'
import DashboardHero from '@/components/myAccount/Hero'
import { AdminNavbar } from '@/components/AdminNavbar'
import DashboardHeader from '@/components/Layouts/DashboardHeader'
import ProtectedRoutes from '@/components/config/protectedRoute/ProtectedRoutes'
import React from 'react'
import DashboardLayout from '@/components/Dashboard/DasboardLayout/DasboardLayout'

function Page() {
  return (
    <div>
     
        <DashboardLayout>
          <DashboardHeader />
          <DashboardHero />
        </DashboardLayout>
     
    </div>
  )
}

export default Page;   
