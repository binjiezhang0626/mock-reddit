import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Body from '../Body/Body';
import Header from '../Header/Header';
import NewPost from '../NewPost/NewPost';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/newpost" component={NewPost} />
      </Switch>
    </Router>
  </div>
);

export default App;
