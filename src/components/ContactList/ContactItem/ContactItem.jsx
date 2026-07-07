import './contactItem.css';

function ContactItem({ contact, onDeleteContact }) {
  const { fName, lName, id } = contact;
  
  return (
    <>
      <p>{`${fName} ${lName}`}</p>
      <span
        onClick={() => {
          onDeleteContact(id);
        }}>
        X
      </span>
    </>
  );
}

export default ContactItem;
