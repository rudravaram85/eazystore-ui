import './App.css';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      {navigation.state === 'loading' ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="text-2xl font-semibold text-primary dark:text-light">
            Loading...
          </span>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  );
}

export default App;
