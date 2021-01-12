import React from 'react';
// import ReactDom from 'react-dom'
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
// import { AdminLayout } from './layouts'
import AuthLayout from 'sections/Auth'
import AdminLayout from 'sections/Admin'
import { auth } from 'utils/firebase'
import { setCurrentUser } from 'redux/user/user.actions'
import { updateImporterConfig } from 'redux/importer/importer.actions'

class App extends React.Component {


  componentDidMount(){
    // const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      // console.log(user)
      if(user){
        const { displayName, email, photoURL, emailVerified, uid } = user
        const currentUser = { displayName, email, photoURL, emailVerified, uid }
        this.props.setCurrentUser(currentUser)
      } else {
        this.props.setCurrentUser(null)
        // this.props.setCurrentUser(true)
      }
    })

    const getConfigUrl = 'http://' + process.env.REACT_APP_ADMIN_BASEURL+'/importer/config'
    console.log(getConfigUrl)

    axios(getConfigUrl).then(response=>{
      console.log(response)
      this.props.updateImporterConfig(response.data)
    }).catch(e=>console.log(e))
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  renderConditional = (props) => !this.props.currentUser ? (<AuthLayout {...props} />) : (<AdminLayout {...props} /> )


  render(){
    return(
      <Switch>
      {
        //<Route key='0' path="/" render={this.renderConditional}/> 
      }
        <Route key='0' path="/" render={(props)=><AdminLayout {...props} />}/> 
      
      </Switch>

    )
  }

}



const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateImporterConfig: json => dispatch(updateImporterConfig(json))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
