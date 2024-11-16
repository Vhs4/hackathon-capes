import React from 'react'
import Header from '../../components/Header/Header'
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