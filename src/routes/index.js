// Library
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Types
import { RouteDictionary, CustomerRoutePath } from './types';

// Auth page
import SignIn from '../pages/AuthPage/Signin/Signin';
import SignUp from '../pages/AuthPage/Signup/Signup';

// 404 Page
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

// Customer page
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const RoomDetail = React.lazy(() => import('../pages/RoomDetail/RoomDetail'));

const Auth = () => {
  return (
    <Routes>
      <Route
        path={RouteDictionary.SignIn}
        element={
          <React.Suspense fallback="Loading...">
            <SignIn />
          </React.Suspense>
        }
      />
      <Route
        path={RouteDictionary.SignUp}
        element={
          <React.Suspense fallback="Loading...">
            <SignUp />
          </React.Suspense>
        }
      />
      <Route
        path={RouteDictionary.ForgotPassword}
        element={
          <React.Suspense fallback="Loading...">
            <HomePage />
          </React.Suspense>
        }
      />

      <Route
        path={RouteDictionary.Home}
        element={
          <React.Suspense>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route
        path={CustomerRoutePath.Detail}
        element={
          <React.Suspense>
            <RoomDetail />
          </React.Suspense>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Auth;
