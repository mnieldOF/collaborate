import React, { createContext, useContext, useState, useEffect } from 'react';

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

const getUser = () => sleep(1000).then(() => ({username: 'elmo'}))
.then(() => null)

const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null,
  });

  console.log(state);

  useEffect(() => {
    getUser().then(
      user => setState({status: 'success', error: null, user}),
      error => setState({status: 'error', error, user: null}),
    )
  }, []);

    const login = () => {} // make a login request
    const register = () => {} // register the user
    const logout = () => {} // clear the token in localStorage and the user data

    return (
      <AuthContext.Provider value={state}>
        {state.status === 'pending' ? (
          'Loading...'
        ) : state.status === 'error' ? (
          <div>
            Oh no
            <div>
              <pre>{state.error.message}</pre>
            </div>
          </div>
        ) : (
          children
        )}
      </AuthContext.Provider>
    );
}

const useAuth = () => {
  const state = useContext(AuthContext)
  const isPending = state.status === 'pending'
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'
  const isAuthenticated = state.user && isSuccess
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  }
}

export { AuthProvider, useAuth };