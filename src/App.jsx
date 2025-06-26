import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Page2 from './components/Page2';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
      <Page2 />
      <Products />
      <Footer />
    </>
  );
}

export default App;
