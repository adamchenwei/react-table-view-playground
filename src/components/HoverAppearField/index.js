import React, { Component } from 'react';

export default class HoverAppearField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.row.value}
        <br/>
        {
          this.props.showButton ? <button>Go</button> : null
        }

      </div>
    );
  }
}
