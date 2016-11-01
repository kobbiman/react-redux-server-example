import React from 'react'
import { Route, IndexRoute } from 'react-router'

/* page */
import {
  App,
  Home,
  Detail,
  Apply
} from "./containers";

class NoMatch extends React.Component{
  render() {
    return (
      <p>404 not found</p>
    );
  }
}

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/detail" component={Detail} />
    <Route path="/apply" component={Apply} />

    <Route path="*" component={NoMatch} status="404" />
  </Route>
)