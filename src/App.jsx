import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Mint from './pages/Mint';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
