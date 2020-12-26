import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const Home = () => {
  const [user, setuser] = useState([]);//this is hook which store array of json obj in user

  useEffect(() => {//this is hook which is rendered each time when component state get changed
    loadUsers();//this method is getting called everytime when useeffect run
  },[]);//[] this is dependencies array if you donot give this then it run infinite time this is for bounding it to limit

  const loadUsers = async () => {//async is used for asynchronuous because we dont know how long server take to response
    const result = await axios.get("http://localhost:3003/users");//this line getting a data from json-server
    setuser(result.data);//this line is setting the result.data to user in state///result holds multiple value so .data give exact value
  };

  const deleteUser= async(id)=>{//this function getting user id and deleting data in server with particular id
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();//loading all data from server
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">Home Page</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user,i)=>(
              <tr key={i}>
              <th scope="row">{i+1}</th>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>
                <Link className="btn btn-primary px-3 mr-2" to={`/user/view/${user.id}`} >View</Link>{/* this lines getting id from users and passing to delete function*/}
                <Link className="btn btn-outline-primary px-3 mr-2" to={`/user/edit/${user.id}`} >Edit</Link>
                <Link className="btn btn-danger mr-1" onClick={()=>deleteUser(user.id)} to="#">Delete</Link>
              </th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
