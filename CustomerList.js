// src/CustomerList.js
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
} from 'react-admin';

const CustomerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

const CustomerList = (props) => (
  <List {...props} filters={<CustomerFilter />} perPage={10}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="firstName" label="First Name" />
      <TextField source="lastName" label="Last Name" />
      <EmailField source="email" />
      <EditButton basePath="/customers" />
      <DeleteButton basePath="/customers" />
    </Datagrid>
  </List>
);

export default CustomerList;
