import AdminTransactionsPage from '@/components/AllProduct/AllTransaction'
import AdminUsersPage from '@/components/AllProduct/AllUser'
import AdminProductTable from '@/components/AllProduct/ProductTable'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import LandingLayout from '@/components/Layouts/LandingLayout'
import DashboardLayout from '@/components/myAccount/layout'
import React from 'react'

function page() {
  return (
    <div>
      {/* <LandingLayout> */}
      <DashboardLayout>
        <AdminTransactionsPage/>
       </DashboardLayout> 
      {/* </LandingLayout> */}
    </div>
  )
}

export default page;
