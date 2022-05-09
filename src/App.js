import './App.css';
import Dashboard from './components/Dashboard'
import Cards from './components/Cards'
import Buttons from './components/Buttons'
import Borders from './components/Borders'
import Other from './components/Other'
import Chart from './components/Chart'
import Login from './components/Login'
import Colors from './components/Colors'
import Animations from './components/Animations'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Router>
      <div class="bg-gradient-primary">
        <div class="container">
        <Routes>
          
        </Routes>
        </div>
      </div>
    </Router>  */}

    <Router> 
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/user" element={<Dashboard/>}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="Animations" element={<Animations/>}/>
          <Route path="Cards" element={<Cards/>}/>
          <Route path="Chart" element={<Chart/>}/>
          <Route path="Buttons" element={<Buttons/>}/>
          <Route path="Colors" element={<Colors/>}/>
          <Route path="Other" element={<Other/>}/>
          <Route path="Borders" element={<Borders/>}/>
        </Route>
      </Routes>       
      
    </Router>
  </>
  );
}

export default App;
