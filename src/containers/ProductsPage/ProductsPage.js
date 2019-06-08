import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCategories} from "../../store/actions/actions";
import Categories from "../../components/UI/Categories/Categories";

class ProductsPage extends Component {
    componentDidMount () {
        if (!this.props.category) {
            this.props.onFetchCategories();
        }
    }

    render () {
        return (
            <div>
                {this.props.categories? <Categories categories={this.props.categories} /> : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.shop.categories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);