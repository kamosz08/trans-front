/* eslint-disable no-underscore-dangle */
import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';

interface Props extends RouteComponentProps {}

export const Main: React.FC<Props> = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users').then((res) => res.json()).then((res) => {
      console.log(res);
      setUsers(res);
    });
  }, []);

  return (
    <div>
      Main page
      {users.map((user) => <div key={user._id}>{JSON.stringify(user, null, 2)}</div>)}
    </div>
  );
};
