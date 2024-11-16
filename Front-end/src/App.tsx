import { Outlet } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UseAuth';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </UserProvider>
  )
}

export default App
