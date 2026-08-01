import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { EMPTY_CONTACT } from '../../constants/constants';
import {
  addContact,
  deleteContact,
  switchModeToAddContact,
  updateContact,
} from '../../store/slices/contactSlice';

import InputArea from './InputArea/InputArea';

import './contactForm.module.css';

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
        'Phone number is not valid. It must be like +380123456789',
      ),
  });

  const renderForm = ({ isValid, setFieldValue }) => {
    const onClearClick = ({ currentTarget }) => {
      setFieldValue(currentTarget.previousSibling.name, '');
    };

    return (
      <Form>
        <InputArea
          type='text'
          name='fName'
          placeholder='First name'
          onClearClick={onClearClick}
        />

        <InputArea
          type='text'
          name='lName'
          placeholder='Last name'
          onClearClick={onClearClick}
        />

        <InputArea
          type='emal'
          name='emal'
          placeholder='Email'
          onClearClick={onClearClick}
        />

        <InputArea
          type='tel'
          name='phone'
          placeholder='Phone'
          onClearClick={onClearClick}
        />

        <Stack direction='row' spacing={3}>
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
        </Stack>
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
