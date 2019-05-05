import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import CustomContainer from './containers/CustomContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  renderCustomersList = () => <h1>Customer List container</h1>

  render(){
    return (
    <Router>    
      <div className="App">
        <Route exact path="/" component={HomeContainer}></Route>
        <Route exact path="/customers" component={CustomerContainer}></Route>
        <Switch>
          <Route path="/customers/new" component={NewCustomerContainer}></Route>
          <Route path="/customers/:id" 
          render={props => <CustomContainer {...props} dni={props.match.params.id}></CustomContainer>}></Route>
        </Switch>
      </div>
    </Router>
  );}
}


export default App;
