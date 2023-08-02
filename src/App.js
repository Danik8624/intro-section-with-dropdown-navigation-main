import {Hero} from './Hero'
import {HeroMobile} from './HeroMobile'
import {Navbar} from './Navbar'
import {NavbarMobile} from './NavbarMobile'
import { useState } from 'react';

function App() {

const [windowSize, setWindowSize] = useState(window.innerWidth);

const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
    };

  window.addEventListener('resize', handleWindowResize);

  return (
        <div className="App">
        {windowSize <= 500 ? <div className='mobile-layout'><NavbarMobile /><HeroMobile /></div>  : <div><Navbar /><Hero /></div>}
    </div>  
  );
}

export default App;




// {window.innerWidth >= 700 ? <h1>False</h1> : <h1>True</h1>}
// const [maxWidth, setMaxWidth] = useState(window.innerWidth);

// useEffect(() => {
//   // Update maxWidth when the window is resized
//   const handleResize = () => setMaxWidth(window.innerWidth);
//   window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
// }, []);


/* <Navbar />
<Hero /> */