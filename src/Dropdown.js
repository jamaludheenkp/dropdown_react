import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
 
function Dropdown() {

    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState([])

    useEffect (function () {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .then(err => console.log(err))
    },[]);

    const selectedChange = (e) => {
        // alert(e.target.value);
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${e.target.value}`)
        .then(response => setSingleUser(response.data))
        .then(err => console.log(err))
    };


  return (
    <div className='container text-center'>
        <br />
        <select className='row form-control col-md-3' onChange={selectedChange}>
            <option className='options' value={0} >-- Select User --</option>
            {users.map((user) => (
                <option value={user.id} key={user.id}> {user.name} </option> 
            ))}
        </select>
        <br /> <br />
        <div className='table'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td> ID </td>
                        <td> Name </td>
                        <td> User Name </td>
                        <td> Email </td>
                        <td> Phone </td>
                        <td> Website </td>
                    </tr>
                </thead>
                <tbody> 
                    {
                        <tr>
                            <td> {singleUser.id} </td>
                            <td> {singleUser.name} </td>
                            <td> {singleUser.username} </td>
                            <td> {singleUser.email} </td>
                            <td> {singleUser.phone} </td>
                            <td> {singleUser.website} </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Dropdown