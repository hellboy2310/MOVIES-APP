
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Fav from './components/Fav'
import {BrowserRouter,Routes,Route,Router} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element = {<><Banner/><MovieList/></>}></Route>
    <Route path='favourites/' element = {<Fav/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    );
}

export default App;
