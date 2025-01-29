import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import AlbumCard from './components/AlbumCard/AlbumCard';
import TopAlbums from './components/Albums/TopAlbums';

function App() {
  return (
    <div  >
     <Navbar/>
     <Hero/>
     <TopAlbums/>
    </div>
  );
}

export default App;
