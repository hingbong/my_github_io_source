import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import SearchBar from './component/SearchBar';
import Footer from './component/Footer';

class App extends Component {



  render() {
    return (
      <div className="App">
      <Header />
      <div className="container">
      <SearchBar />
      <Footer />
      </div>
      </div>
    );
  }
}

export default App;
