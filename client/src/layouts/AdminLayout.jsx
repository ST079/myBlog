import React from 'react'
import AdminNavbar from "./AdminNavbar"
import { Outlet } from 'react-router-dom'
import "./AdminLayout.css"
const AdminLayout = () => {
  return (
    <main className='d-flex vh-100'>
      <AdminNavbar/>
      <div className="col-md-9 mt-5 ">
      <Outlet/>
      </div>
    </main>
  )
}

export default AdminLayout