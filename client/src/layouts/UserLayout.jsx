import React from "react";
import {Outlet} from 'react-router-dom';
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
const UserLayout = () => {
  return (
    <div>
      <UserNavbar />
      <main className="container p-3" style={{height: "100vh"}}>
      <Outlet/>
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
