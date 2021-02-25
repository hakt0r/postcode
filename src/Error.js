
import React     from 'react';
import { Alert } from '@material-ui/lab';

export default function Error({error}) {
  return (
    <Alert variant="error">
      {error.message}
    </Alert>
  );
}
