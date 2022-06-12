import Login from '../components/Login';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthProvider';

export default function Index() {
  const route = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user && route.replace('/home');
  }, [user]);

  return (
    <Login />
  );
}
