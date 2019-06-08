import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch, withRouter} from "react-router";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {connect} from "react-redux";
import ProductsPage from "./containers/ProductsPage/ProductsPage";
import {logoutUser} from "./store/actions/usersActions";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ProductsByCategory from "./containers/ProductsByCategory/ProductsByCategory";
import FullProduct from "./containers/FullProduct/FullProduct";
import {NotificationContainer} from "react-notifications";

class App extends Component {
  render () {
    return (
        <div>
          <Fragment>
            <NotificationContainer/>
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
                  <Route
                      exact
                      path='/:category'
                      render={(props) =>
                          <ProductsByCategory category={props.match.params.category}/>
                      }
                  />
                  <Route path="/products/:id" exact render={(props) =>
                      <FullProduct {...props}/>
                  }/>
                  <Route path="/user/register" exact component={Register}/>
                  <Route path="/user/login" exact component={Login}/>
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