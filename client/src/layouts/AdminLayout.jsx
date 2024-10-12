import React from 'react'
import AdminNavbar from "./AdminNavbar"
import { Outlet } from 'react-router-dom'
import "./AdminLayout.css"
const AdminLayout = () => {
  return (
    <div className='adminGrid'>
      <AdminNavbar/>
      <Outlet/>

    </div>
  )
}

export default AdminLayout