
import React        from 'react';
import List         from './List';
import GET_USERS    from "./query";
import { useQuery } from "@apollo/client";

export default function Normal() {
  const { data, error, loading } = useQuery(GET_USERS);
  return <List {...{data,error,loading}}/>;
}
