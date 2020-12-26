import React, { useState, useEffect } from "react";
import { useHistory, useParams ,Link} from "react-router-dom";
import axios from "axios";

export const Userview = () => {
  const history = useHistory();//use to redirect to previous page or some specified location
  const { id } = useParams();//this hook is to get the id of any particular item

  const [user, SetUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

   
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);//accessing data of particular id from server
    SetUser(result.data);
  };

  useEffect(() => {
    loadUser();
  },[]);//this is used to load the data when component is ready

  return (
    <div className="container">
      <div className="py-3 ">
        <Link to={"/"} className="btn btn-outline-warning mb-3 pb-0 px-4"><h5>Back</h5></Link>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{website}</td>

            
            </tr>
          </tbody>
        </table>
        {/* <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your phone"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Website"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          
        </form> */}
      </div>
    </div>
  );
};
export default Userview;
