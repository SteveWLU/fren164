import './App.css'; 
import Home from './pages/Home'; 
import Contact from './pages/Contact'; 
import About from './pages/About'; 
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { BrowserRouter, Route, Switch }  
    from 'react-router-dom'; 

function App() { 

  return ( 
    <div className="App"> 
     <h1 style={{color: '#323576'}}>Material-UI Drawer</h1> 
     <BrowserRouter> 
     <PersistentDrawerLeft/> 
      <Switch> 
        <Route exact path='/' render= 
            {props => <Home {...props} /> }/> 
        <Route exact path='/about' render= 
            {props => <About {...props} /> }/> 
        <Route exact path='/contact' render= 
            {props => <Contact {...props} /> }/> 
      </Switch> 
    </BrowserRouter> 
    </div> 
  ); 
} 

export default App; 