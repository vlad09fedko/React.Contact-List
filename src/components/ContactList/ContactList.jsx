import { Box, List, Typography } from '@mui/material';

import { useGetContactsQuery } from '../../api/contactApi';

import ContactItem from './ContactItem/ContactItem';

function ContactList() {
  const { data = [] } = useGetContactsQuery();
  return (
    <Box
      sx={{
        minWidth: '20em',
      }}>
      {!data.length ? (
        <Typography variant='h2' align='center' sx={{ fontSize: '1.5em' }}>
          List is empty.
        </Typography>
      ) : (
        <List
          sx={{
            minWidth: '20em',
            padding: '0',
          }}>
          {data.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </Box>
  );
}

export default ContactList;
