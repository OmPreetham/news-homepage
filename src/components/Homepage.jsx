import Header from './Header'
import TopStory from './TopStory'
import NewStories from './NewStories'
import MoreStories from './MoreStories'

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="newsfeed">
        <TopStory />
        <NewStories />
        <MoreStories />
      </main>
    </>
  )
}
export default Homepage
