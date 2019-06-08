import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchProducts} from "../../store/actions/actions";
import Products from "../../components/Products/Products";
import {withRouter} from "react-router";

class ProductsByCategory extends Component {
    componentDidMount () {
        this.props.onFetchProducts(this.props.category);
    }

    productClickHandler = (e, productId) => {
        e.preventDefault();
        this.props.history.replace('/products/'+productId);
    };

    render () {
        return (
            <div>
                {this.props.products ? <Products onProductClick={this.productClickHandler} products={this.props.products} /> : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: (category) => dispatch(fetchProducts(category))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory));