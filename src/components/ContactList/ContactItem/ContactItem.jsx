import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../store/slices/contactSlice';
import { chooseContact } from '../../../store/slices/currentContactSlice';

import './contactItem.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li onDoubleClick={() => dispatch(chooseContact(contact))}>
      <p>{`${contact.fName} ${contact.lName}`}</p>
      <span onClick={() => dispatch(deleteContact(contact.id))}>X</span>
    </li>
  );
}

export default ContactItem;
