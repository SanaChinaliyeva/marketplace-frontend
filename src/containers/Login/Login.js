import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/FormElement/FormElement";
import Error from "../../components/Error/Error";

class Login extends Component {
    state = {
        username: '',
        password: ''
    };
    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmitHandler = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
    };

    render() {
        return (
            <Fragment>
                <h2>Login</h2>
                {this.props.err ? <Error error={this.props.err} /> : null}
                <Form onSubmit={this.onSubmitHandler}>
                    <FormElement
                        title="Username"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        type="text"
                        onChange={this.inputChangeHandler}
                    />
                    <FormElement
                        title="Password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        type="password"
                        onChange={this.inputChangeHandler}
                    />
                    <FormGroup row>
                        <Col sm={{offset:2, size: 10}}>
                            <Button type="submit" color="primary">
                                Login
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.users.loginError
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loginUser: (userData) => dispatch(loginUser(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
