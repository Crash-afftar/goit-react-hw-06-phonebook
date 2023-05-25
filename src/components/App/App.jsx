import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import { Container } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1>PHONEBOOK</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>CONTACTS</h2>
      <ContactFilter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};

export default App;