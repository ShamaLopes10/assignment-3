// src/BusinessOperations.js
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { httpClient } from './Auth'; // Assuming you have httpClient configured

const BusinessOperations = () => {
  const [operationStatus, setOperationStatus] = useState('Unknown');
  
  useEffect(() => {
    const fetchOperationStatus = async () => {
      try {
        const response = await httpClient.get('/business/operations/status');
        setOperationStatus(response.data.status);
      } catch (error) {
        console.error('Failed to fetch business operation status:', error);
        setOperationStatus('Error');
      }
    };
    
    fetchOperationStatus();
  }, []);
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Business Operations Status
        </Typography>
        <Typography variant="body1">
          Operation Status: {operationStatus}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BusinessOperations;
