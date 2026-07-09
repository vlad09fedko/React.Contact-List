import styles from './inputArea.module.css';

function InputArea(props) {
  const { name, placeholder, type, value, isRequired, setContact } = props;

  const inputHandler = event => {
    setContact(prevContact => ({
      ...prevContact,
      [event.target.name]: event.target.value,
    }));
  };

  const clearInput = event => {
    setContact(prevContact => ({
      ...prevContact,
      [event.target.previousElementSibling.name]: '',
    }));
  };

  return (
    <div key={name} className={styles.inputArea}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        required={isRequired}
        onChange={inputHandler}
      />
      <span onClick={clearInput}>X</span>
    </div>
  );
}

export default InputArea;
