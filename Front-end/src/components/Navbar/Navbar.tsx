import React from 'react'
import { useAuth } from '../../contexts/UseAuth';
import AuthHeader from '../auth/AuthHeader/AuthHeader';
import RootHeader from '../root/RootHeader/RootHeader';

const Navbar = () => {
    const { isLoggedIn } = useAuth();

  return (
    isLoggedIn() ? <AuthHeader /> : <RootHeader />
  )
}

export default Navbar