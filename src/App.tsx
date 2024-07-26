import React from 'react';

import { AuthWrapper } from './components/AuthWrapper/AuthWrapper';

import Auth from './routes/Auth';

import './App.css';

function App() {
  return (
    <AuthWrapper>
      <Auth />
    </AuthWrapper>
  );
}

export default App;
