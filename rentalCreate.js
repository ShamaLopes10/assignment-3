// src/RentalCreate.js
import React, { useState, useEffect } from 'react';
import { Create, SimpleForm, DateTimeInput, SelectInput, useNotify, useRedirect } from 'react-admin';

const RentalCreate = () => {
  const [customers, setCustomers] = useState([]);
  const [films, setFilms] = useState([]);
  const notify = useNotify();
  const redirect = useRedirect();

  useEffect(() => {
    fetch('https://your-api-url.com/customers')
      .then(response => response.json())
      .then(data => setCustomers(data));
    fetch('https://your-api-url.com/films')
      .then(response => response.json())
      .then(data => setFilms(data));
  }, []);

  const onSuccess = ({ data }) => {
    notify(`New Rental created`);
    redirect(`/rentals?filter=%7B"id"%3A"${data.id}"%7D`);
  };

  return (
    <Create onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput disabled source="staff_id" defaultValue="1" />
        <SelectInput source="customer_email" choices={customers} />
        <SelectInput source="film_title" choices={films} />
        <SelectInput
          source="status"
          defaultValue="borrowed"
          disabled
          choices={[
            { id: 'borrowed', name: 'borrowed' },
            { id: 'delayed', name: 'delayed' },
            { id: 'lost', name: 'lost' },
            { id: 'returned', name: 'returned' },
          ]}
        />
        <DateTimeInput source="rental_date" />
        <DateTimeInput source="return_date" />
      </SimpleForm>
    </Create>
  );
};

export default RentalCreate;