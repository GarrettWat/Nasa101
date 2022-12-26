import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apod from './comps/Apod';
import Earth from './comps/Earth';
import Home from './comps/Home';
import Navbar from './comps/Navbar';
import QuotePage from './comps/QuotePage';

const App = () =>(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' exact element = {<Home />}/>
      <Route path='/Quote' exact element = {<QuotePage />}/>
      <Route path='/Apod' element = {<Apod />}/>
      <Route path='/earth' element = {<Earth />}/>
    </Routes>
  </BrowserRouter>
)

export default App;
