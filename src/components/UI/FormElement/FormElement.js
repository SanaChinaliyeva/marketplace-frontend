import React from 'react';
import PropTypes from 'prop-types';
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";

const FormElement = props => {
    return (
        <FormGroup row>
            <Label sm={2} for="username">{props.title}</Label>
            <Col sm={10}>
                <Input
                    type={props.type}
                    name={props.name} id={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    invalid={!!props.error}
                    required={props.required}
                />
                {
                    props.error ?
                        <FormFeedback>
                            {props.error}
                        </FormFeedback> : null
                }

            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default FormElement;
