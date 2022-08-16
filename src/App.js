import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (
  <Router>
     <div className="App"> 
      <Navbar title="Text Utils"/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}>  
          </Route>

          <Route exact path="/" element={<TextForm />}>
          </Route>
 
        </Routes>
      </div>
     </div> 
     </Router> 
  );
}

export default App;
