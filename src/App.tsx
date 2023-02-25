import Routes from './routes/router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
           <Header />
           <Routes /> 
           </BrowserRouter>
    </div>
  );
}

export default App;
