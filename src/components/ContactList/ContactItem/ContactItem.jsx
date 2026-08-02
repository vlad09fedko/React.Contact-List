import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from '@mui/material';

import {
  chooseContact,
  deleteContact,
} from '../../../store/slices/contactSlice';

function ContactItem({ contact, contact: { fName, lName, id } }) {
  const dispatch = useDispatch();

  const onChooseContact = () => dispatch(chooseContact(contact));
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ListItem
      onDoubleClick={onChooseContact}
      sx={{
        width: '100%',
        padding: '0',
      }}>
      <ListItemButton>
        <ListItemText primary={`${fName} ${lName}`} />
        <Tooltip title='Delete' onClick={onDeleteContact}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemButton>
    </ListItem>
  );
}

export default ContactItem;
