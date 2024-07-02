// src/TechnicalStatus.js
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { httpClient } from './Auth'; // Assuming you have httpClient configured

const TechnicalStatus = () => {
  const [serverStatus, setServerStatus] = useState('Unknown');
  
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await httpClient.get('/server/status');
        setServerStatus(response.data.status);
      } catch (error) {
        console.error('Failed to fetch server status:', error);
        setServerStatus('Error');
      }
    };
    
    fetchServerStatus();
  }, []);
  
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Technical Status
        </Typography>
        <Typography variant="body1">
          Server Status: {serverStatus}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TechnicalStatus;
