import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyPassword from "./pages/VerifyPassword";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";


const App = () => {
  return (
    <div className="container">
      <Routes>
        {/* Pages routing */}
        
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-password" element={<VerifyPassword />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes */}
        <Route element={<UserLayout/>}>
        <Route path="/" element={<Home />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout/>}>
        <Route path="/" element={<Home />} />
        </Route>


      {/* Error route handel */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
