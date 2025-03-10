import {  Routes, Route } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Detail from './routes/Detail.tsx';

function App() {
  return (
    // <Router>
      <Routes>
        {/* <Route path="/character/:id">
          <Detail />
        </Route> */}
        <Route path="/character/:id" element={<Detail />} />   
        <Route path="/" element={<Home />} />        
      </Routes>
    // </Router>
  );
}

export default App;
