import { useDispatch } from 'react-redux';

import {
  chooseContact,
  deleteContactAction,
} from '../../../store/actions/contactActions';

import './contactItem.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    dispatch(deleteContactAction(contact.id));
  };

  return (
    <li onDoubleClick={() => dispatch(chooseContact(contact))}>
      <p>{`${contact.fName} ${contact.lName}`}</p>
      <span onClick={onDeleteBtnClick}>X</span>
    </li>
  );
}

export default ContactItem;
