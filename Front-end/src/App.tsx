import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UseAuth';

function App() {
  return (
    <UserProvider>
      <Outlet />
        <ToastContainer />
    </UserProvider>
  )
}

export default App
