import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './comps/Home';


const App = () =>(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<Home />}/>
    </Routes>
  </BrowserRouter>
)

export default App;
