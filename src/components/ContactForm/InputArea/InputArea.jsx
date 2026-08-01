import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton, Tooltip } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import styles from './inputArea.module.css';

function InputArea({ type, name, placeholder, onClearClick }) {
  return (
    <>
      <div className={styles.inputArea}>
        <Field type={type} name={name} placeholder={placeholder} />
        <Tooltip title='Clear' onClick={onClearClick}>
          <IconButton>
            <CancelIcon
              sx={{
                color: '#4f4e5a',
                '&:hover': {
                  color: 'white',
                  transition: 'color 0.2s',
                },
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
      <ErrorMessage name={name} />
    </>
  );
}

export default InputArea;
