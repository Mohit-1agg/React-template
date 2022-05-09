import './App.css';
import Sidebar from'./layout/Sidebar'
import Footer from './layout/Footer'
import Header from './layout/Header'
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
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        </div>
      </div>
    </Router> */} 

    <Router>        
      <div id="page-top">
        <div id="wrapper">
            <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header/>
                <Routes>
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="/Animations" element={<Animations/>}/>
                  <Route path="/Cards" element={<Cards/>}/>
                  <Route path="/Chart" element={<Chart/>}/>
                  <Route path="/Buttons" element={<Buttons/>}/>
                  <Route path="/Colors" element={<Colors/>}/>
                  <Route path="/Other" element={<Other/>}/>
                  <Route path="/Borders" element={<Borders/>}/>
                </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  </>
  );
}

export default App;
