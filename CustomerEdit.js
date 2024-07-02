// src/CustomerEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, EmailInput } from 'react-admin';

const CustomerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="firstName" label="First Name" />
      <TextInput source="lastName" label="Last Name" />
      <EmailInput source="email" />
    </SimpleForm>
  </Edit>
);

export default CustomerEdit;
