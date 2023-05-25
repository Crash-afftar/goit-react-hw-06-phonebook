import React from 'react';
import { ButtonDelete, ListItem } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <ListItem>
    {name}: {number}
    <ButtonDelete type="button" onClick={onDeleteContact}>
      X
    </ButtonDelete>
  </ListItem>
);

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};