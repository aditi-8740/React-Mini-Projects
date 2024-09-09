import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  const products = [
    {
      price:99999,
      name:'Iphone xp 2',
      quantity: 0,
    },
    {
      price:6999,
      name:'redmi note 2',
      quantity: 0,
    },
  ]
  return (
    <>
      <Navbar/>
      <ProductList products={products} />  
      {/* <Footer/> */}
    </>
  );  //kase pass karte ha data ko kisi bi component ke andar.. by passing prop
}

export default App;
