import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Walkthrough from "./Walkthrough/Walkthrough";
import Questionare from './questionare/Questionare';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Homepage /> } />
          <Route path='/walkthrough' element={<Walkthrough/>}/>
          <Route path='/questionare' element={<Questionare/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
