// src/UserProfile.js
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { httpClient } from './Auth'; // Assuming you have httpClient configured

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await httpClient.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setUsers([]);
      }
    };
    
    fetchUsers();
  }, []);
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          User Profiles
        </Typography>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
