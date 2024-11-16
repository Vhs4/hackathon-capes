import { Outlet } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UseAuth';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex-grow flex mx-auto w-full max-w-screen-lg">
          <Outlet />
        </div>

        <Footer />
      </div>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
