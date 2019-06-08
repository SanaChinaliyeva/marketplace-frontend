import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {user.display_name}!
            </DropdownToggle>
            <DropdownMenu right>
                <NavLink tag={RouterNavLink} to='/user/add_item' exact>
                    Add new item
                </NavLink>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

export default UserMenu;
