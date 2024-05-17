import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Mint from './pages/Mint';
import NoMatch from './pages/NoMatch';
import Breed from './pages/Breed';
import Stake from './pages/Stake';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/breed" element={<Breed />} />
        <Route path="/stake" element={<Stake />} />
      </Routes>
    </>
  );
};

export default App;
