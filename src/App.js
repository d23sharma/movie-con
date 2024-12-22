import './App.css';
import Header from './Components/Header';
import MovieCard from './Components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='main-section'>
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
