import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users() {
    useEffect( () => {
        window.scrollTo(0, 0);
        alluser();
      }, []); 
    
      const [isuser, setuser] = useState([]);

      const alluser = async (ids) => {
        try {
          axios.get(`http://localhost/wdpf55_react/reactapp3/api/user.php`)
          .then(res => {
            console.log(res.data.userlist)
            setuser(res.data.userlist);
          })
        } catch (error) { throw error;}    
      }

      const deleteConfirm = (id) => {
        // alert(id);
        if (window.confirm("Are you sure, you want to delete?")) {
          deleteUser(id);
        }
      };

      const deleteUser = async (id) => {
        // try {
          axios.post(`http://localhost/wdpf55_react/reactapp3/api/delete_user.php`, { 
            userids: id,
          })
          .then(res => {
            setuser([]);
            alluser();
            return;
           })
        // } catch (error) { throw error;}    
      }
  if(isuser){    
  return (
    <>
        <div className="container">
            <h1>User List</h1>
            <Link className='btn btn-success' to="/newusers">Add New User</Link><br /><br />
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
            <tbody>
            {
            isuser.map(user=> 
            <tr>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
                <td><button className=" btn btn-danger mx-2" onClick={() => deleteConfirm(user.user_id)}>Delete </button><span className='glyphicon glyphicon-edit'></span><button className=" btn btn-primary">Edit</button></td>
            </tr>
            )}
            </tbody>
            </table>
        </div>
    </>
  )
  }else{
    return(
      <div className="container">
        <h1>User List</h1>
        <Link className='btn btn-success' to="/newusers">Add New User</Link><br /><br />
        <table className='table table-striped'>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <p>No Data Found</p>
            </tbody>
        </table>
      </div>
    )
  }
}
