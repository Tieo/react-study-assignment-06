import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Detail from './routes/Detail.tsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/character/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
