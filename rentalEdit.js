// src/RentalEdit.js
import React, { useState, useEffect } from 'eact';
import { Edit, SimpleForm, DateTimeInput, SelectInput, useNotify, useRedirect } from 'eact-admin';

const RentalEdit = () => {
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
    notify(`Rental updated`);
    redirect(`/rentals?filter=%7B"id"%3A"${data.id}"%7D`);
  };

  return (
    <Edit onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <SelectInput source="customer_email" choices={customers} />
        <SelectInput source="film_title" choices={films} />
        <SelectInput
          source="status"
          choices={[
            { id: 'borrowed', name: 'borrowed' },
            { id: 'delayed', name: 'delayed' },
            { id: 'lost', name: 'lost' },
            { id: 'eturned', name: 'eturned' },
          ]}
        />
        <DateTimeInput source="rental_date" />
        <DateTimeInput source="return_date" />
        <BooleanInput source="is_returned" />
      </SimpleForm>
    </Edit>
  );
};

export default RentalEdit;