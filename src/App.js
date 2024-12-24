import './App.css';
import Header from './Components/Header';
import MovieCard from './Components/MovieCard';
import Practice from './Components/Practice';



function App() {
  return (
    <div className="App">
      <Header/>

      <div className='movie-section'>
        <MovieCard />
      </div>

      <Practice/>
    </div>
  );
}

export default App;
