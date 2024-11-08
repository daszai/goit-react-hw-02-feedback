import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <form>
        <button onClick={this.props.onLeaveFeedback[0]}>good</button>
        <button onClick={this.props.onLeaveFeedback[1]}>neutral</button>
        <button onClick={this.props.onLeaveFeedback[2]}>bad</button>
      </form>
    );
  }
}

export default FeedbackOptions;
