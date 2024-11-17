import TreinamentoSection from '@/components/TreinamentoSection/TreinamentoSection'
import SearchComponent from '../../components/auth/SearchComponent/SearchComponent'
import InformativoSection from '@/components/InformativoSection/InformativoSection'
import HeaderSearchComponent from '@/components/auth/HeaderSearchComponent/HeaderSearchComponent'

const Home = () => {

  return (
    <main className='flex flex-col justify-center max-w-screen-lg'>
        <HeaderSearchComponent />
       <SearchComponent />
       <div className='mt-[75px]'>
<InformativoSection />
       </div>
       <TreinamentoSection />
    </main>
  )
}

export default Home