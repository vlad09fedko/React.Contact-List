import './contactItem.css';

function ContactItem({ contact: { fName, lName, id }, onDeleteContact }) {
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
