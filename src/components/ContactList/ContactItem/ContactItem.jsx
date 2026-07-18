import './contactItem.css';

function ContactItem({
  contact: { fName, lName, id },
  onContactDoubleClick,
  onDeleteContact,
}) {
  return (
    <li onDoubleClick={() => onContactDoubleClick(id)}>
      <p>{`${fName} ${lName}`}</p>
      <span onClick={() => onDeleteContact(id)}>X</span>
    </li>
  );
}

export default ContactItem;
