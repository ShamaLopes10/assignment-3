// src/CustomerProfile.js
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { httpClient } from './Auth'; // Assuming you have httpClient configured

const CustomerProfile = () => {
  const [customers, setCustomers] = useState([]);
  
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await httpClient.get('/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Failed to fetch customers:', error);
        setCustomers([]);
      }
    };
    
    fetchCustomers();
  }, []);
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Customer Profiles
        </Typography>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              {customer.name} - {customer.email}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CustomerProfile;
