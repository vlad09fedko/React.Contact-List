import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';

import {
  chooseContact,
  deleteContact,
} from '../../../store/slices/contactSlice';

import './contactItem.css';

function ContactItem({ contact, contact: { fName, lName, id } }) {
  const dispatch = useDispatch();
  return (
    <li onDoubleClick={() => dispatch(chooseContact(contact))}>
      <p>{`${fName} ${lName}`}</p>
      <Tooltip title='Delete' onClick={() => dispatch(deleteContact(id))}>
        <IconButton>
          <DeleteIcon
            sx={{
              color: '#4f4e5a',
              '&:hover': {
                color: 'white',
                transition: 'color 0.2s',
              },
            }}
          />
        </IconButton>
      </Tooltip>
    </li>
  );
}

export default ContactItem;
