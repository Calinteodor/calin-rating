'use strict';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  disabled: {
    pointerEvents: 'none'
  }
};

export default class CalinComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hoverValue: props.value
    }
  }

  render (color) {
    const rating = [];
    for (let i = 1; i <= this.props.max; i++) {
      if (this.state.hoverValue > i) {
        color = "row color-square horizontal";
      } else {
        color = "row square horizontal"
      }
      rating.push(
        <div
          key={i}
          className={color}
          disabled={this.props.disabled}
          style={this.props.itemStyle}
          onMouseEnter={() => this.setState({hoverValue: i})}
          onMouseLeave={() => this.setState({hoverValue: this.props.value})}
          onClick={() => {
            if (!this.props.readOnly && this.props.onChange) {
              this.props.onChange(i)
            }
          }}
        >
          <div className="col-xs-12 align-center top-16">
            <span className="inner-squarer">{i}</span>
          </div>
        </div>
      );
    }

    return (
      <div
        style={this.props.disabled || this.props.readOnly ? {...styles.disabled, ...this.props.style} : this.props.style}
      >
        {rating}
      </div>
    )
  }
}

CalinComponent.defaultProps = {
  disabled: false,
  max: 5,
  readOnly: false,
  value: 0
};

CalinComponent.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.number
};

