import { useContext } from 'react';
import { AuthContext, type AuthContextValue } from '../context';

const useAuthentication = (): AuthContextValue => {
  return useContext(AuthContext);
};

export default useAuthentication;
