import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch, withRouter} from "react-router";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {connect} from "react-redux";
import ProductsPage from "./containers/ProductsPage/ProductsPage";
import {logoutUser} from "./store/actions/usersActions";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

class App extends Component {
  render () {
    return (
        <div>
          <Fragment>
            <header>
              <Toolbar
                  user={this.props.user}
                  logout={this.props.logoutUser}
              />
            </header>
            <main>
              <Container>
                <Switch>
                  <Route path="/" exact component={ProductsPage}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/login" component={Login}/>
                </Switch>
              </Container>
            </main>
          </Fragment>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
};
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));