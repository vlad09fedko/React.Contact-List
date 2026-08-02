import { Box, Stack, Typography } from '@mui/material';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  return (
    <Box
      sx={{
        maxWidth: 'fit-content',
        padding: '2em 0',
        margin: '10em auto',
        border: '1px solid',
        borderRadius: '1em',
      }}>
      <Typography
        variant='h1'
        align='center'
        sx={{
          fontSize: '3.5em',
        }}>
        Contact list
      </Typography>
      <Stack direction='row' sx={{ padding: '1em', gap: '1em' }}>
        <ContactList />
        <ContactForm />
      </Stack>
    </Box>
  );
}

export default App;
