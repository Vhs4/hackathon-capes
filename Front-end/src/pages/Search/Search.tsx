import SearchComponent from '@/components/auth/SearchComponent/SearchComponent'
import NewSearchResults from '@/components/NewSearchResults/NewSearchResults'
const Search = () => {
    const urlQuery = new URLSearchParams(window.location.search)
    const query = urlQuery.get('search')

    const searchData = {
        results: [
          {
            id: 1,
            title: "Innovating STEM Education through Project-Based Learning",
            authors: "Emily Clark, Michael Adams",
            abstract: "This article explores how project-based learning can be applied in STEM education to engage students and improve their problem-solving skills.",
            year: 2023,
            journal: "Journal of STEM Education",
            isOpenAccess: true,
            isPeerReviewed: true,
          },
          {
            id: 2,
            title: "The Impact of Robotics in Elementary STEM Curriculum",
            authors: "Sarah Williams, John Taylor",
            abstract: "A study on the integration of robotics in elementary school STEM curricula and its effects on students' interest and performance in science and technology.",
            year: 2024,
            journal: "International Journal of Educational Technology",
            isOpenAccess: false,
            isPeerReviewed: true,
          },
          {
            id: 3,
            title: "Equity in STEM: Addressing Gender Disparities in Engineering Education",
            authors: "Laura Jenkins, Kate Morrison",
            abstract: "This article examines the challenges women face in engineering education and suggests strategies to foster gender equity in STEM fields.",
            year: 2022,
            journal: "Engineering Education Review",
            isOpenAccess: true,
            isPeerReviewed: false,
          },
          {
            id: 4,
            title: "The Role of Virtual Reality in Enhancing STEM Learning Experiences",
            authors: "James Clark, Olivia Rivera",
            abstract: "This paper investigates the potential of virtual reality technology to enhance hands-on STEM learning, allowing students to explore complex concepts in an immersive environment.",
            year: 2024,
            journal: "Journal of Interactive Learning Technologies",
            isOpenAccess: false,
            isPeerReviewed: true,
          },
          {
            id: 5,
            title: "Building Critical Thinking Skills through STEM Education",
            authors: "Brian Hall, Natalie Wilson",
            abstract: "This research highlights how STEM education promotes the development of critical thinking skills in students, preparing them for challenges in the modern workforce.",
            year: 2023,
            journal: "STEM Education Research",
            isOpenAccess: true,
            isPeerReviewed: true,
          },
        ],
        totalResults: 5,
      };

  return (
    <main className='flex flex-col max-w-screen-lg  w-full'>
       <SearchComponent />
       <div className="flex mt-12">
       <NewSearchResults results={searchData.results} totalResults={searchData.totalResults} />
       </div>
        <p>Query: {query}</p>

    </main>
  )
}

export default Search