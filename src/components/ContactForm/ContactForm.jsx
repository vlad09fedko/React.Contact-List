import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { EMPTY_CONTACT } from '../../constants/constants';
import {
  addContact,
  deleteContact,
  switchModeToAddContact,
  updateContact,
} from '../../store/slices/contactSlice';

import styles from './contactForm.module.css';

function ContactForm() {
  const currentContact = useSelector(state => state.currentContact);

  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    if (currentContact.id) {
      dispatch(updateContact(values));
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  };

  const schema = Yup.object().shape({
    fName: Yup.string().trim().required('First name is required field.'),
    lName: Yup.string().trim().required('Last name is required field.'),
    email: Yup.string().email('Email is not valid.'),
    phone: Yup.string()
      .min(7, 'Minimum phone number length is 7 characters.')
      .max(16, 'Maximum phone number length is 16 characters')
      .matches(
        /^\+*\d{7,16}$/,
        'Phone number is not valid. It must be like +381111111111',
      ),
  });

  const renderForm = ({ isValid, setFieldValue }) => {
    const onClearClick = ({ target }) => {
      setFieldValue(target.previousSibling.name, '');
    };

    return (
      <Form>
        <div className={styles.inputArea}>
          <Field type='text' name='fName' placeholder='First name' />
          <span onClick={onClearClick}>X</span>
        </div>
        <ErrorMessage name='fName' />

        <div className={styles.inputArea}>
          <Field type='text' name='lName' placeholder='Last name' />
          <span onClick={onClearClick}>X</span>
        </div>
        <ErrorMessage name='lName' />

        <div className={styles.inputArea}>
          <Field type='email' name='email' placeholder='Email' />
          <span onClick={onClearClick}>X</span>
        </div>
        <ErrorMessage name='email' />

        <div className={styles.inputArea}>
          <Field type='tel' name='phone' placeholder='Phone' />
          <span onClick={onClearClick}>X</span>
        </div>
        <ErrorMessage name='phone' />

        <div className={styles.buttons}>
          <Field
            type='button'
            onClick={() => dispatch(switchModeToAddContact())}
            value='New'
          />
          <Field type='submit' value='Save' disabled={!isValid} />
          <Field
            type='button'
            onClick={() => dispatch(deleteContact(currentContact.id))}
            value='Delete'
            style={{
              visibility: currentContact.id ? 'visible' : 'hidden',
            }}
          />
        </div>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentContact ? currentContact : EMPTY_CONTACT}
      onSubmit={onFormSubmit}
      validationSchema={schema}
      enableReinitialize>
      {renderForm}
    </Formik>
  );
}

export default ContactForm;
