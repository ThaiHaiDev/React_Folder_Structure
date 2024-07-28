import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { RouteDictionary } from '../../routes/types';

interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const userLogin = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin.byPass) {
      navigate(RouteDictionary.SignIn);
    }
  }, [userLogin, navigate]);

  return <div>{children}</div>;
};
