import Navbar from "./components/Navbar/Navbar";
import './app.css';
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { ACTION, COMEDY, DOCUMENTRY, HORROR, NETFLIXORGINALS, ROMANTIC, TRENDING } from "./components/constant";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={NETFLIXORGINALS} title='Netflix Orginals' isLarge />
      <RowPost url={ACTION} title='Action' />
      <RowPost url={TRENDING} title='Trending' />
      <RowPost url={COMEDY} title='Comedy Movies' />
      <RowPost url={HORROR} title='Horror Movies' />
      <RowPost url={ROMANTIC} title='Romantic Movies' />
      <RowPost url={DOCUMENTRY} title='Documentaries' />

    </div>
  );
}

export default App;
