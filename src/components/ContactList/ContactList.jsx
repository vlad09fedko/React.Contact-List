import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, List, Typography } from '@mui/material';

import { getContacts } from '../../store/slices/contactSlice';

import ContactItem from './ContactItem/ContactItem';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const contacts = useSelector(state => state.contacts);
  return (
    <Box
      sx={{
        minWidth: '20em',
      }}>
      {!contacts.length ? (
        <Typography variant='h2' align='center' sx={{ fontSize: '1.5em' }}>
          List is empty.
        </Typography>
      ) : (
        <List
          sx={{
            minWidth: '20em',
            padding: '0',
          }}>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </Box>
  );
}

export default ContactList;
