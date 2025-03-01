import React from 'react'
import FooterImg from "../../public/favicon.png"
import { Link } from 'react-router-dom'

const UserFooter = () => {
  return (
    <div>
       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top p-3">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img src={FooterImg} alt="" height={24} width={30}/>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary"> © iKoders Bloging Page</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><Link className="text-body-secondary" to="www.instagram.com" target='_blank'><i className="zmdi zmdi-instagram material-icons-name" height="24" width="24"></i></Link></li>

        <li className="ms-3"><Link className="text-body-secondary" to="#" target='_blank'><i className="zmdi zmdi-linkedin-box material-icons-name" height="24" width="24"></i></Link></li>

        <li className="ms-3"><Link className="text-body-secondary" to="#" target='_blank'><i className="zmdi zmdi-facebook-box material-icons-name" height="24" width="24"></i></Link></li>
        
        <li className="ms-3"><Link className="text-body-secondary" to="#" target='_blank'><i className="zmdi zmdi-github-box material-icons-name" height="24" width="24"></i></Link></li>
      </ul>
    </footer>
    </div>
  )
}

export default UserFooter