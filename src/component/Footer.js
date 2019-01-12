import React, { Component } from 'react';
import {
    Card, CardBody, CardText } from 'reactstrap';
import '../App.css';
export default class Footer extends Component 
{
    render()
    {
        return <Card className="footer">
        <CardBody>
          <CardText>Copyright © 2019
          </CardText>
        </CardBody>
      </Card>
    }
}
    