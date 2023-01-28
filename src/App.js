import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
