import React, {Component, Fragment} from 'react';
import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct} from "../../store/actions/actions";
import {connect} from "react-redux";
import Error from "../../components/Error/Error";

class NewProduct extends Component {
    createProduct = (product) => {
        this.props.onProductCreated(product).then(() => {
            this.props.history.push('/');
        });
    };
    render() {
        return (
            <Fragment>
                <h1>Create new product</h1>
                {this.props.error ? <Error error={this.props.error} /> : null}
                <ProductForm submitForm={this.createProduct}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.shop.err
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onProductCreated: (product) => dispatch(createProduct(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
