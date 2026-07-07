import styles from './inputArea.module.css';

function InputArea(props) {
  const {
    name,
    placeholder,
    type,
    value,
    isRequired,
    inputHandler,
    onClearClick,
  } = props;

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
      <span onClick={onClearClick}>X</span>
    </div>
  );
}

export default InputArea;
