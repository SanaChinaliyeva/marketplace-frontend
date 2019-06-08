import React from 'react';
import {Alert} from "reactstrap";

const Error = props => {
    const error = props.error.message;
    return (
        <Alert color="danger">{error}</Alert>
    )
};

export default Error;