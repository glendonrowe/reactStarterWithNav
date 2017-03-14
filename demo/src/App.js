import React, { Component, PropTypes } from 'react';
import Header from './components/common/Header'
class App extends Component {
  render() {
    return (
      <div>
      <div className="container">
        {/*<p>Header here...</p>*/}
        <Header></Header>
        {this.props.children}
      </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
