// src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { httpClient, authProvider } from './Auth';
import RentalList from './rentalList';
import RentalCreate from './RentalCreate';
import RentalEdit from './RentalEdit';
import TechnicalStatus from './technicalStatus';
import CustomerProfile from './CustomerProfile'; // Custom component for customer profiles
import UserProfile from './UserProfile';
import BussinessOperations from './BussinessOperations';
import CustomerList from './CustomerList'; // Custom component for customer list
import CustomerEdit from './CustomerEdit';

const App = () => (
  <Admin
    dataProvider={httpClient}
    authProvider={authProvider}
  >
    <Resource
      name="rentals"
      list={RentalList}
      create={RentalCreate}
      edit={RentalEdit}
    />

<Resource
      name="customers"
      list={CustomerList}
      edit={CustomerEdit}
      create={CustomerEdit}
    />

     <Resource name="technical_status" />
    <TechnicalStatus />
    {/* Add more resources and custom components as needed */}
    <Resource name="customer_profiles" />
    <CustomerProfile />
    <Resource name="user_profiles" />
    <UserProfile />
    <Resource name="bussiness_operation" />
    <BussinessOperations />
  </Admin>
);

export default App;