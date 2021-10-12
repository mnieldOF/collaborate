import React, { createContext, useContext } from 'react';
import { useAuth } from './authContext';


const UserContext = createContext();

const UserProvider = props => {
  const {user} = useAuth();

  return(
    <UserContext.Provider value={user} {...props} />
  )
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };