import {React, useEffect} from 'react'
import AdminNavbar from "./AdminNavbar"
import { Outlet,useNavigate} from 'react-router-dom'
import "./AdminLayout.css"
import { getToken } from '../utils/token'
import "../components/Table.css"
const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

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