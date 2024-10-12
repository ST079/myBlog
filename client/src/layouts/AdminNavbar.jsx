import { Link } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Admin Portal</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="#" className="nav-link text-white active">
              <i className="fa fa-dashboard me-2 "></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <i className="fa fa-person me-2"></i>
              Users
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white ">
              <i className="fa fa-book me-2 "></i>
              Blogs
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
              src="#"
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
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
