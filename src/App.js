import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Views/Home';


function App() {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(()=>{
    function ResizeNav(){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', ResizeNav)
    return _ => {
      window.removeEventListener('resize', ResizeNav)
    }
  });

  return (
    <Router>
      <div className='App'>
        <div className='SidebarContainer' style={{float: 'left'}}>
          <Sidebar height={dimensions.height}/>
        </div>
        <div className='ContentContainer' >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bubble-sort" element={<Home/>}/>
            <Route path="/select-sort" element={<Home/>}/>
            <Route path="/heap-sort" element={<Home/>}/>
            <Route path="/merge-sort" element={<Home/>}/>
            <Route path="/quick-sort" element={<Home/>}/>
            <Route path="/binary-search" element={<Home/>}/>
            <Route path="/linear-search" element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
