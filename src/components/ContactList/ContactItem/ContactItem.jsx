import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from '@mui/material';

import { useDeleteContactMutation } from '../../../api/contact-service';
import { chooseContact } from '../../../store/slices/currentContactSlice';

function ContactItem({ contact, contact: { fName, lName, id } }) {
  const dispatch = useDispatch();
  const [deleteContact] = useDeleteContactMutation();

  const onChooseContact = () => dispatch(chooseContact(contact));
  const onDeleteContact = async () => await deleteContact(id);
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
