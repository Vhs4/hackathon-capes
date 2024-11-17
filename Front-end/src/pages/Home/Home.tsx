import TreinamentoSection from '@/components/TreinamentoSection/TreinamentoSection'
import SearchComponent from '../../components/auth/SearchComponent/SearchComponent'
import InformativoSection from '@/components/InformativoSection/InformativoSection'

const Home = () => {

  return (
    <main>
       <SearchComponent />
       <div className='mt-[75px]'>
<InformativoSection />
       </div>
       <TreinamentoSection />
    </main>
  )
}

export default Home