import React,{useEffect,useState} from 'react'
import axios from 'axios'

const List = () => {
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     try{
  //       const response = await axios(`http://localhost:8000/api/v1/users`);
  //       console.log(response.data.data.data);
  //       // setData(data.msg || []);
  //     } catch (error) { 
  //       console.log(error);
  //   }
  // }
  // fetchData();
  // },[]);
  return (
    <>
     <div className="container p-3">
        <div className="heads d-flex justify-content-between">
          <h2>Users</h2>
          <button className="btn btn-success fw-bold btn-sm" style={{}}>
            {" "}
            + New User
          </button>
        </div>
        <hr />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roles</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {/* {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.roles}</td> 
                  <td>{user.status}</td>
                </tr>
              );
            }
            )} */}
          </tbody>
        </table>
        <div className="pageNumber d-flex align-items-center justify-content-center pt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </>
  )
}

export default List