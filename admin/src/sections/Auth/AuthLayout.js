import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import AuthNavbar from './navbar'
import AuthFooter from './footer'

import routes from 'routes.js'


class AuthLayout extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }
  componentDidUpdate(e) {
    if (e.history.pathname !== e.location.pathname) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainContent.scrollTop = 0;
    }
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render(){
    return(
      <div className="AuthLayout">
        <div className='main-content' ref='mainContent'>
          <AuthNavbar />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/login" />
          </Switch>
        </div>
        <AuthFooter />
      </div>
    )
  }

}


export default AuthLayout;
