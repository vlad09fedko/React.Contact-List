import { useDispatch } from 'react-redux';

import {
  chooseContact,
  deleteContact,
} from '../../../store/slices/contactSlice';

import './contactItem.css';

function ContactItem({ contact, contact: { fName, lName, id } }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li onDoubleClick={() => dispatch(chooseContact(contact))}>
      <p>{`${fName} ${lName}`}</p>
      <span onClick={onDelete}>X</span>
    </li>
  );
}

export default ContactItem;
