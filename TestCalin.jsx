'use strict';

const React = require('react'),
  tredux = require('tredux');

import CalinComponent from '../components/CalinComponent';

class TestCalin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  renderPage() {
    return (
      <div className="col-xs-12">
        <CalinComponent
          value={this.state.value}
          max={10}
          onChange={(e) => {
            this.setState({value: e+1});
          }}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        {this.renderPage()}
      </div>
    )
  }

}

module.exports = tredux.connect((state) => {
  return {};
}, TestCalin);

