import { useDispatch } from 'react-redux';

import api from '../../../api/contact-service';
import {
  chooseContact,
  deleteContact,
} from '../../../store/actions/contactActions';

import './contactItem.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    api
      .delete(`/contacts/${contact.id}`)
      .then(({ data }) => dispatch(deleteContact(data.id)));
  };

  return (
    <li onDoubleClick={() => dispatch(chooseContact(contact))}>
      <p>{`${contact.fName} ${contact.lName}`}</p>
      <span onClick={onDeleteBtnClick}>X</span>
    </li>
  );
}

export default ContactItem;
