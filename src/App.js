import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SettingsPage from './pages/SettingsPage';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from './components/Layout';
import Reports from "./pages/Reports";
import { PrivateRoute } from './helpers/PrivateRoute';

function App() {
  return (
    <div className="App container p-3">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/reports" component={Reports} />
            <PrivateRoute exact path="/settings" component={SettingsPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
