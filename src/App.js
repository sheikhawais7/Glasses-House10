import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './pages/Routes'
import ScreenLoader from './components/ScreenLoader/ScreenLoader';
import { useCartContext } from './context/CartContext';

function App() {

  const { isAppLoading } = useCartContext()
  if (isAppLoading) {
    return <ScreenLoader />
  }
  else {
    return (
      <>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
