import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './Component/Home'
import CourseItemDetails from './Component/CourseItemDetails'
import NotFound from './Component/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
