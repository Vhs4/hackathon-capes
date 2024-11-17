import SearchComponent from '@/components/auth/SearchComponent/SearchComponent'
const Search = () => {
    const urlQuery = new URLSearchParams(window.location.search)
    const query = urlQuery.get('search')

  return (
    <div className='flex flex-col'>
       <SearchComponent />
        <p>Query: {query}</p>

    </div>
  )
}

export default Search