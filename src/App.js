import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Categories from './components/Categories';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
       <Outlet />
      <Footer />
    </div>
  );
}

export default App;
