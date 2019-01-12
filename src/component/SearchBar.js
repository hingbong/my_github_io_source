import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardBody,
  CardTitle, Button,InputGroup, InputGroupAddon, Input, Media } from 'reactstrap';

export default class SearchBar extends Component 
{
    search(){
        // console.log(document.querySelector('#keywords').value);
        window.location.href = "https://www.baidu.com/s?wd=" + document.querySelector('#keywords').value;
      }
      render()
      {
        return <Card>
        <CardBody>
          <CardTitle><Media id="logo" src="image/google.png" alt="logo"/><h1>Baidu Search</h1></CardTitle>
        <InputGroup>
        <Input id="keywords" placeholder="Input the keywords which you want to search" />
        <InputGroupAddon addonType="append">
        <Button color="primary" onClick={this.search}>Search</Button>
        </InputGroupAddon>
      </InputGroup>
        </CardBody>
      </Card>
      }
}