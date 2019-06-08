import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCategories, fetchProducts} from "../../store/actions/actions";
import Categories from "../../components/UI/Categories/Categories";
import Products from "../../components/Products/Products";
import {withRouter} from "react-router";

class ProductsPage extends Component {
    componentDidMount () {
        this.props.onFetchCategories();
        this.props.onFetchProducts();
    }

    productClickHandler = productId => {
        this.props.history.replace('/products/'+productId);
    };

    render () {
        return (
            <div>
                { this.props.categories? <Categories categories={this.props.categories} /> : null }
                { this.props.products ? <Products onProductClick={this.productClickHandler} products={this.props.products} /> : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.shop.categories,
        products: state.shop.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(fetchCategories()),
        onFetchProducts: () => dispatch(fetchProducts())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsPage));