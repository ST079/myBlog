import React ,{useEffect} from "react";
import {Outlet, useNavigate} from 'react-router-dom';
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import { getToken } from "../utils/token";
const UserLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = getToken();
      if (!token) {
        navigate('/login');
      }
    }, [navigate]);
  return (
    <div>
      <UserNavbar />
      <main className="container p-3" style={{'minHeight': "100vh"}}>
      <Outlet/>
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
