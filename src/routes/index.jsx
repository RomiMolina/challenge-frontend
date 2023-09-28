import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from '../components/Projects/index';
import AddProject from '../components/AddProject/index';
import EditProject from '../components/EditProject/index';

export default function AppRoutes() {
  return (
   <Router>
    <Switch>
        <Route exact path="/" component={Projects} />
        <Route exact path="/add" component={AddProject} />
        <Route exact path="/edit/:id" component={EditProject} />
    </Switch>
   </Router>
  )
}
