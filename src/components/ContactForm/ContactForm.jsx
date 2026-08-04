import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import { EMPTY_CONTACT } from '../../constants/constants';
import {
  addContact,
  deleteContact,
  switchModeToAddContact,
  updateContact,
} from '../../store/slices/contactSlice';
import { formSchema } from '../../utils/validate/validationSchemas';

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

  const renderForm = ({ isValid, setFieldValue }) => {
    const onClearClick = name => {
      setFieldValue(name, '');
    };

    const btnsStyles = { width: '100%', margin: '1em' };

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
          type='email'
          name='email'
          placeholder='Email'
          onClearClick={onClearClick}
        />

        <InputArea
          type='tel'
          name='phone'
          placeholder='Phone'
          onClearClick={onClearClick}
        />

        <Stack
          direction='row'
          spacing={10}
          sx={{
            position: 'absolute',
            bottom: '1em',
            right: '1em',
            left: '1em',
          }}>
          <Field
            as={() => (
              <Button
                variant='contained'
                color='primary'
                sx={btnsStyles}
                onClick={() => dispatch(switchModeToAddContact())}>
                New
              </Button>
            )}
          />

          <Field
            as={() => (
              <Button
                variant='contained'
                color='success'
                sx={btnsStyles}
                disabled={!isValid}
                type='submit'>
                Save
              </Button>
            )}
          />

          <Field
            as={() => (
              <Button
                variant='contained'
                color='error'
                sx={{
                  ...btnsStyles,
                  visibility: currentContact.id ? 'visible' : 'hidden',
                }}
                onClick={() => dispatch(deleteContact(currentContact.id))}>
                Delete
              </Button>
            )}
          />
        </Stack>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentContact ? currentContact : EMPTY_CONTACT}
      onSubmit={onFormSubmit}
      validationSchema={formSchema}
      enableReinitialize>
      {renderForm}
    </Formik>
  );
}

export default ContactForm;
