import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import ProductThumbnail from "../ProductThumbnail/ProductThumbnail";

const Products = props => {
    const products = props.products;
    return (
        <div className="d-flex flex-wrap">
            {
                products.map(product =>
                    <Card key={product._id} className="w-25" onClick={(e) => props.onProductClick(e, product._id)}>
                        <ProductThumbnail photo={product.photo}/>
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardSubtitle>{product.price} KZT</CardSubtitle>
                        </CardBody>
                    </Card>
                )
            }
        </div>
    )
};

export default Products;