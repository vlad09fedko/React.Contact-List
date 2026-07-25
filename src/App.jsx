import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1>Contact list</h1>
      <article className={styles.listAndForm}>
        <ContactList />
        <ContactForm />
      </article>
    </div>
  );
}

export default App;
