
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const SortIcon = ({ sortBy, field })=> {
  if ( ! sortBy )               return null;
  if ( field !== sortBy.field ) return <ExpandLess style={{opacity:0.2}}/>;
  if ( sortBy.order === 'asc' ) return <ExpandLess color="primary"/>;
  else                          return <ExpandMore color="primary"/>;
};

export default SortIcon;