import ChatBot from '@/components/ChatBot/ChatBot'
import { useAuth } from '@/contexts/UseAuth'

const CapesLab = () => {
    const { user } = useAuth()

  return (
    <main className='max-w-screen-lg w-full'>
        <div className="flex justify-between">
        <div><span className="text-[#212529] text-xl font-bold leading-normal">Olá, {user?.username}</span><span className="text-[#212529] text-xl font-normal font-['Raleway'] leading-normal"> </span><span className="text-[#212529] text-xl font-bold font-['Raleway'] leading-normal">({user?.email})</span></div>
        </div>
        <ChatBot />
    </main>
  )
}

export default CapesLab