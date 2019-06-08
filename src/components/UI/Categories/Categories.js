import React from 'react';
import {NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Categories = props => {
    const categories = props.categories;
    return (
        <div>
            {
                categories.map(category =>
                    <NavLink key={category._id}
                        tag={RouterNavLink}
                        to={'/'+category.title.toLowerCase()}
                        exact
                    >
                        {category.title}
                   </NavLink>
                )
            }
        </div>
    )
};

export default Categories;