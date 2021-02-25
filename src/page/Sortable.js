
import React, { useMemo, useState } from 'react';

import { useQuery } from "@apollo/client";
import GET_USERS    from "../list/query";
import List         from '../list/List';

const types = {
  name:  String,
  age:   Number,
  email: String,
  id:    String
};

const applySort = ({field,order})=> {
  if ( types[field] === Number )
    return order === 'asc'
      ? (a,b) => a[field] - b[field]
      : (a,b) => b[field] - a[field]
  else
    return order === 'asc'
      ? (a,b) => a[field].localeCompare(b[field])
      : (a,b) => a[field].localeCompare(a[field])
}

export default function Sortable() {

  const { data = { users: [] }, error, loading } = useQuery(GET_USERS);
  
  const [ sortBy, setSortBy ] = useState({ field:'age', order:'asc' });

  const toggleSort = field => {
    if ( sortBy.field === field ){
      setSortBy({ field, order: sortBy.order === 'asc' ? 'dsc' : 'asc' });
    } else {
      setSortBy({ field, order: 'asc' });
    }
  }

  const reversed = useMemo( () =>
    [...data.users].sort( applySort(sortBy) )
  , [ data.users, sortBy ]);

  return <List {...{
    data: { users: reversed },
    error,
    loading,
    sortBy,
    toggleSort
  }}/>;

}
