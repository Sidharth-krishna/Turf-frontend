import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const Admin = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user').then((res) => {
      setAllUsers(res.data);
    })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (userId) => {
    try {
      // Make a request to delete the user with the specified ID
      await axios.delete(`http://localhost:5000/user/${userId}`);

      // Update the state to reflect the deletion
      setAllUsers(allUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='mt-5'>
      <h1 className='text-center mb-4'>Booked Users</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>No of People</th>
            <th>Time</th>
            <th>Email</th>
            <th>Date</th>
            <th>Phone no</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.numberOfPeople}</td>
              <td>{item.selectedTime}</td>
              <td>{item.emailAddress}</td>
              <td>{item.selectedDate}</td>
              <td>{item.mobileNumber}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>
                  <FaTrash style={{ color: 'red' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
