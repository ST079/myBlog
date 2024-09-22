import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyPassword from "./pages/VerifyPassword";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";


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
        <Route path="/" element={<UserLayout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="blogs" element={<Home />} />
        </Route>


      {/* Error route handel */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
