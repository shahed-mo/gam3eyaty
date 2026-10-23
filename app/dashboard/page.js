import GroupsList from '@/Components/dashboard/GroupsList'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg">
        <GroupsList/>
    </div>
  )
}

export default Dashboard