import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import Article from "./pages/Article";
import AjoutArticle from "./pages/AjoutArticle";
import APropos from "./pages/APropos";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>

       <Routes>
        <Route path="/" element={<Accueil /> } />
        <Route path="article" element={<Article />} />
        <Route path="ajoutArticle" element={<AjoutArticle/>} />
        <Route path="aPropos" element={<APropos />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
