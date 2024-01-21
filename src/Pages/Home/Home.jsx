import Banner from '../../Components/Banner/Banner';
import Search from '../../Components/Search/Search';
import Trending from '../../Components/Trending/Trending';

const Home = () => {
  return (
    <div>
      <Search />
      <Trending />
      <Banner />  
    </div>
  )
}

export default Home