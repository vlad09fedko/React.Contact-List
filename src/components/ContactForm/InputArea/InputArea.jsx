import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import styles from './inputArea.module.css';

function InputArea({ type, name, placeholder, onClearClick }) {
  const customInput = () => (
    <TextField label={placeholder} sx={{}} name={name} fullWidth type={type} />
  );

  return (
    <>
      <Stack
        direction='row'
        sx={{
          width: '20em',
        }}>
        <Field as={customInput} name={name} type={type} />
        <Tooltip title='Clear' onClick={onClearClick}>
          <IconButton>
            <CancelIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <ErrorMessage name={name}>
        {message => <span className={styles.errorMsg}>{message}</span>}
      </ErrorMessage>
    </>
  );
}

export default InputArea;
