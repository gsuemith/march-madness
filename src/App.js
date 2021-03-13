import { Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Tournament from './routes/Tournament'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/tournament" component={Tournament}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
