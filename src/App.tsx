import Routes from './routes/router';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
           <BrowserRouter>
    
           <Routes /> 
    
           </BrowserRouter>
    </div>
  );
}

export default App;
