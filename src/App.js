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
//[1009652,1009368,1009220,1009697,1009562,1009189,1010733,1017324,1010365,1009664,1009338,1009282,1010338,1009187,1010744,1009351]
export default App;
