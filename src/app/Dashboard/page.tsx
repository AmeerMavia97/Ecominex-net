import LandingLayout from '@/components/Layouts/LandingLayout'
import AssigMachineUser from '@/components/myAccount/assignProfile'
import DashboardHero from '@/components/myAccount/Hero'
import DashboardLayout from '@/components/myAccount/layout'
import { AdminNavbar } from '@/components/AdminNavbar'
import DashboardHeader from '@/components/Layouts/DashboardHeader'
import ProtectedRoutes from '@/components/config/protectedRoute/ProtectedRoutes'
import React from 'react'

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
