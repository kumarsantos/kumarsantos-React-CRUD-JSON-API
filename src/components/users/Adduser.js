import React,{useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";

export const Adduser = () => {
 const history=useHistory();//redicting purpose creating useHistory hook obj
  const [user,SetUser]=useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''
  })
  
const {name,username,email,phone,website}=user;
  const onInputChange=(e)=>{
    SetUser({...user,[e.target.name]:e.target.value})
  }

  const onSubmit= async (e)=>{
    e.preventDefault();
    if(name==="")
    {

      alert("Please enter the name");
    }
    else
    {
    await axios.post("http://localhost:3003/users",user);//posting data in the state to url given
    history.push("/");//redirected to home page
    }

  }
  console.log(user)
  return (
    <div className="container">
      <div className="py-3 ">
        <h1>Add User Page</h1>
        <form onSubmit={e=>onSubmit(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e=>onInputChange(e)}
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
              onChange={e=>onInputChange(e)}
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
              onChange={e=>onInputChange(e)}
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
              onChange={e=>onInputChange(e)}
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
              onChange={e=>onInputChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Adduser;
