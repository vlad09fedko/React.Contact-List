import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../store/slices/contactSlice';
import {
  checkWhenDeletingContact,
  chooseContact,
} from '../../../store/slices/currentContactSlice';

import './contactItem.css';

function ContactItem({ contact, contact: { fName, lName, id } }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
    dispatch(checkWhenDeletingContact(id));
  };

  return (
    <li onDoubleClick={() => dispatch(chooseContact(contact))}>
      <p>{`${fName} ${lName}`}</p>
      <span onClick={onDelete}>X</span>
    </li>
  );
}

export default ContactItem;
