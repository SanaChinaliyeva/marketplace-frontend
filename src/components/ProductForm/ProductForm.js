import React, {Component} from 'react';
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

class ProductForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        photo: '',
        price: ''
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    fileChangeHandler = e => {
        this.setState({photo: e.target.files[0]});
    };

    select = (event) => {
        this.setState({
            category: event.target.value
        });
    };

    submitFormHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (let key in this.state) {
            formData.append(key, this.state[key]);
        }

        this.props.submitForm(formData);
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup row>
                    <Label sm={2} for="name">Name</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="name" id="name"
                            placeholder="Enter product name"
                            value={this.state.name}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="description">Description</Label>
                    <Col sm={10}>
                        <Input
                            type="text" required
                            name="description" id="description"
                            placeholder="Enter product description"
                            value={this.state.description}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <select value={this.state.category} onChange={this.select}>
                    <option value="HDD">HDD</option>
                    <option value="CPUs">CPUs</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Shoes">Shoes</option>
                </select>

                <FormGroup row>
                    <Label sm={2} for="price">Price</Label>
                    <Col sm={10}>
                        <Input
                            type="number" required min="0"
                            name="price" id="price"
                            placeholder="Enter product price"
                            value={this.state.price}
                            onChange={this.inputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2} for="photo">Photo</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="photo" id="photo"
                            placeholder="Enter photo url"
                            onChange={this.fileChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit" color="primary">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ProductForm;
