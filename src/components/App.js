import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateOutlet from './PrivateOutlet';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/*' element={<PrivateOutlet />}>
                <Route path='dashboard' element={<Dashboard />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
