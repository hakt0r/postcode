
import React, { useMemo } from 'react';
import List               from './List';
import GET_USERS          from "./query";
import { useQuery }       from "@apollo/client";

const reverseByAge = (a,b) => b.age - a.age;

export default function Reverse() {

  const { data = { users: [] }, error, loading } = useQuery(GET_USERS);

  const reversed = useMemo( () =>
    [...data.users].sort( reverseByAge )
  , [data.users]);

  return <List {...{data:{users:reversed},error,loading}}/>;

}
