import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer class="page-footer" style={{margin:'100px 0'}}>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
       </div>
    </footer>
    );
  }
}

export default Footer;
