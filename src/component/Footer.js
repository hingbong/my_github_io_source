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
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.         
          </CardText>
        </CardBody>
      </Card>
    }
}
    