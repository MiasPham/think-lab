import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ResourcesOpportunities from './pages/ResourcesOpportunities';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/resourcesopportunities' element={<ResourcesOpportunities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;