// src/RentalList.js
import React from 'react';
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

const RentalList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="customer_email" />
      <TextField source="film_title" />
      <DateField source="rental_date" />
      <DateField source="return_date" />
      <BooleanField source="is_returned" />
    </Datagrid>
  </List>
);

export default RentalList;