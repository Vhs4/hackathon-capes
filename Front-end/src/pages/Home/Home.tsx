import Header from '../../components/Navbar/Navbar'
import { toast } from 'react-toastify'

const Home = () => {

    function testarToast() {
        toast.warning("Testando toast", {
            position: "bottom-right",
        })
    }  

  return (
    <main>
        <Header />
        <button onClick={testarToast}>Toast</button>
    </main>
  )
}

export default Home