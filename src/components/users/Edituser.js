import React, { useState, useEffect } from "react";
import { useHistory, useParams,Link } from "react-router-dom";
import axios from "axios";

export const Edituser = () => {
  const history = useHistory();//this hook is used to redirect the component to previous or any components
  const { id } = useParams();//this hook is used to get data from the url

  const [user, SetUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;//distructuring the object

  const onInputChange = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });//setting the value of input field to state//...user is giving all the value and next part is giving updated value
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);//when user submit the form the data in the user is posting to url .
    history.push("/");//redirecting to home page
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);//fetching the data from server 
    SetUser(result.data);//setting fetched data to user state for updating purpose
  };

  useEffect(() => {
    loadUser();//calling loaduser for loading the data
  },[]);

  return (
    <div className="container">
      <div className="py-3 ">
        <h1>Edit User </h1>
        <form onSubmit={(e) => onSubmit(e)}>
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

          <button type="submit" className="btn btn-warning">
            Update
          </button>
          <Link to={"/"} className="btn btn-danger ml-2  pb-2 px-4">Back</Link>{/* redirecting to home*/}
        </form>
      </div>
    </div>
  );
};
export default Edituser;
