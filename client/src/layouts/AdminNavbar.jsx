import { Link,useLocation,useNavigate} from "react-router-dom";
import Logo from "../assets/logo.png";
import { removeToken } from "../utils/token";
const AdminNavbar = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const logout = async() => {
    removeToken();
    navigate("/login");
    
  }

  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-4 text-bg-dark vh-100">
        <Link
          to="/admin"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img src={Logo} alt="" width="30" height="30" />
          <span className="fs-4 mx-2">Admin Portal</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            {/* uselocation ko pathname ma .includes garera parxa ki bhanera garda ni bhayo or full path match garera garda ni bhayo to dynamically switch the active status */}
            <Link to="/admin/blogs" className={`nav-link text-white ${pathname.includes('blogs') ? 'active fw-bold fs-6' : ''}`}> 
              <i className="fa fa-book me-2 "></i>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className={`nav-link text-white ${pathname === '/admin/users' ? 'active fw-bold fs-6' : ''}`}>
              <i className="fa fa-person me-2"></i>
              Users
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={Logo}
              alt=""
              className="rounded-circle me-2"
              width="32"
              height="32"
            />
            <strong>Admin</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={logout}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
