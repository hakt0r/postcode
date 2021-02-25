

import Table          from "@material-ui/core/Table";
import TableBody      from "@material-ui/core/TableBody";
import TableCell      from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead      from "@material-ui/core/TableHead";
import TableRow       from "@material-ui/core/TableRow";
import Paper          from "@material-ui/core/Paper";

import Loading        from "./Loading";
import Error          from "./Error";

const HeadCell = ({field,title,toggleSort,align="left"}) =>
  <TableCell 
    style={{cursor:'pointer',userSelect:'none'}}
    onClick={ e => toggleSort(field)}
    align={align}>
      {title}
  </TableCell>

export default function List({data,error,loading,sortBy,toggleSort=()=>{}}) {

  if ( loading ) return <Loading/>;
  if ( error   ) return <Error {...{error}}/>;
  console.log(toggleSort)
  return (
<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <HeadCell {...{ field:"name",  title:"Name",  toggleSort }}/>
        <HeadCell {...{ field:"age",   title:"Age",   toggleSort, align:'right' }}/>
        <HeadCell {...{ field:"email", title:"eMail", toggleSort, align:'right' }}/>
        <HeadCell {...{ field:"id",    title:"ID",    toggleSort, align:'right' }}/>
      </TableRow>
    </TableHead>
    <TableBody> { data.users.map((row) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.id.split("-").pop()}</TableCell>
      </TableRow>
    ))
    } </TableBody>
  </Table>
</TableContainer> )};
