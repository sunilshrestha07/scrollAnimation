import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router , Route,Routes, useLocation } from 'react-router-dom';
import Model from './Model';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header/>
      <AnimatedRoute/>
    </Router>
  );
}

function AnimatedRoute(){
  const location = useLocation()
  return(
    <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/model' element={<Model/>}/>
      </Routes>
    </AnimatePresence>
  )
}


export default App;
