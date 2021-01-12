import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import { Sidebar, Navbar, Footer } from './layout';

// Auth 
import { auth } from 'utils/firebase';
import { setCurrentUser } from 'redux/user/user.actions';

import routes from './routes';

class App extends React.Component {
  constructor({setCurrentUser}){
    super()
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(this.handleUserChange);

   }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  handleUserChange = user => {
    if(user){
      const { email, uid } = user
      this.props.setCurrentUser({email, uid});
    } else {
      this.props.setCurrentUser(null);
      if(process.env.NODE_ENV === "production"){
        window.location.assign('/logout');  // reloads the window so the server sends the landing page instead of the application  
      }
    }
  }
  
  // handleUserData = data => {
  //   if(data){
  //     this.props.setUserData(data);
  //   }else{
  //     this.props.setUserData(null)
  //   }
  // };

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if(true){
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
            exact={prop.exact}
          />
        );
      } else {
        return null;
      }
    });
  };

  render(){
    return(
      <div className='App'>
        <Sidebar/>
        <div className="main-content" ref="mainContent" onClick={this.closeSidenav}>
          <Navbar />

          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/" />
          </Switch>

          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
  // userData: user.userData,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  // setUserData: data => dispatch(setUserData(data))
  // updateImporterConfig: json => dispatch(updateImporterConfig(json))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
