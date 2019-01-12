import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

export default class Header extends Component 
{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render()
    {
        return <div className="header">
        <Navbar light style={{'backgroundColor':'white'}} expand="md">
        <NavbarBrand href="/">Hingbong's web</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/hingbong">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>;
    }
}