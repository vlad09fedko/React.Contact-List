import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, Stack, TextField, Tooltip } from '@mui/material';
import { ErrorMessage, useField } from 'formik';

import styles from './inputArea.module.css';

function InputArea({ placeholder, onClearClick, ...props }) {
  const [field] = useField(props);
  return (
    <>
      <Stack
        direction='row'
        sx={{
          width: '20em',
        }}>
        <TextField label={placeholder} fullWidth {...field} />
        <Tooltip title='Clear' onClick={() => onClearClick(field.name)}>
          <IconButton>
            <CancelIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <ErrorMessage name={field.name}>
        {message => <span className={styles.errorMsg}>{message}</span>}
      </ErrorMessage>
    </>
  );
}

export default InputArea;
