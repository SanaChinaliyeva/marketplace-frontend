import React, {Component} from 'react';
import ProductThumbnail from "../../components/ProductThumbnail/ProductThumbnail";
import Button from "reactstrap/es/Button";
import {connect} from "react-redux";
import {fetchProductById, deleteProduct} from "../../store/actions/actions";
import {withRouter} from "react-router";
import Error from "../../components/Error/Error";

class FullProduct extends Component {
    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.onFetchProductById(id);
    }

    isSeller = () => {
        if (this.props.user) {
            if (this.props.product.seller._id === this.props.user._id){
                return true;
            }
        }
        return false;
    };

    deleteProductHandler = (e, id) => {
        e.preventDefault();
        this.props.onDeleteProduct(id);
    };

    render () {
        const product = this.props.product;
        return (
            <div>
                {this.props.err ? <Error error={this.props.err} /> : null}
                {product ?
                    <div className="w-50">
                        <h1>{product.name}</h1>
                        <h2>{product.description}</h2>
                        <h2>{product.price} KZT</h2>
                        <ProductThumbnail photo={product.photo} />
                        <h2>Category: {product.category.title}</h2>
                        <h3>Seller: {product.seller.display_name}</h3>
                        <h3>Seller's phone number: {product.seller.phone}</h3>
                        {this.isSeller() ? <Button onClick={(e)=>this.deleteProductHandler(e, product._id)}>Delete</Button> : null }
                    </div> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
        product: state.shop.product,
        err: state.shop.err
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchProductById: (id) => dispatch(fetchProductById(id)),
        onDeleteProduct: (id) => dispatch(deleteProduct(id))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullProduct));