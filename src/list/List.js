

import Table          from "@material-ui/core/Table";
import TableBody      from "@material-ui/core/TableBody";
import TableCell      from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead      from "@material-ui/core/TableHead";
import TableRow       from "@material-ui/core/TableRow";
import Paper          from "@material-ui/core/Paper";

import Loading        from "./Loading";
import Error          from "./Error";
import SortIcon       from "./SortIcon";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  headCell: {
    cursor:'pointer',
    userSelect:'none',
    fontWeight:'bold',
    "&>span": {
      display: 'inline-flex'
    }
  }
}));

const HeadCell = ({ field, title, toggleSort, sortBy, align="left" }) => {
  const classes = useStyles();
  return (
<TableCell
  component="th"
  variant="head"
  className={classes.headCell}
  onClick={ e => toggleSort(field)}
  align={align}>
    <span>
      { title }
      <SortIcon {...{ field, sortBy }}/>
    </span>
</TableCell> )};

export default function List({data,error,loading,sortBy,toggleSort=()=>{}}) {

  if ( loading ) return <Loading/>;
  if ( error   ) return <Error {...{error}}/>;
  console.log(toggleSort)
  return (
<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <HeadCell {...{ field:"name",  title:"Name",  toggleSort, sortBy }}/>
        <HeadCell {...{ field:"age",   title:"Age",   toggleSort, sortBy, align:'right' }}/>
        <HeadCell {...{ field:"email", title:"eMail", toggleSort, sortBy, align:'right' }}/>
        <HeadCell {...{ field:"id",    title:"ID",    toggleSort, sortBy, align:'right' }}/>
      </TableRow>
    </TableHead>
    <TableBody> { data.users.map((row) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.id.split("-").pop()}</TableCell>
      </TableRow>
    ))
    } </TableBody>
  </Table>
</TableContainer> )};
