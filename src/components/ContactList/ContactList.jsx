import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      />
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};