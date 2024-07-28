import { AuthWrapper } from './layouts/AuthWrapper/AuthWrapper';
import SetUpPage from './routes/index';

import './App.css';

function App() {
  return (
    <AuthWrapper>
      <SetUpPage />
    </AuthWrapper>
  );
}

export default App;
