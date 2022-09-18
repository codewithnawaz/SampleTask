
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
 


function App() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <Dropdown/>
      </div>
      
    </>
  );
}

export default App;
