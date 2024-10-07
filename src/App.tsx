import './styles/App.scss';
import { Navbar } from './components';
import { Outlet } from 'react-router-dom';
import { Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
