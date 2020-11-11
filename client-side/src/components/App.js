import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'


import Header from './Header';
import JobLists from './JobLists';
import Footer from './Footer';
import FormNew from './forms/FormNew';
import ErrorBoundary from './ErrorBoundary';


class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
 }

  render() {
    return (
      <div className="container">
        <BrowserRouter>

          <div>
            <Header />

            <Route exact path="/" component={JobLists} />
            <Route path="/forms/new" component={FormNew} />
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
