
import React          from 'react';
import AppBar         from '@material-ui/core/AppBar';
import Toolbar        from '@material-ui/core/Toolbar';
import Button         from '@material-ui/core/Button';
import Typography     from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

export default function TopBar() {
  const history = useHistory();
  return (
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6">
      Postcode Table + GraphQL Demo
    </Typography>
    <span style={{flexGrow:1}}/>
    <Button color="inherit" onClick={ e => history.push('/list') }>
      List
    </Button>
    <Button color="inherit" onClick={ e => history.push('/reverse')}>
      Reverse
    </Button>
    <Button color="inherit" onClick={ e => history.push('/sortable')}>
      Sortable
    </Button>
  </Toolbar>
</AppBar> ); }
