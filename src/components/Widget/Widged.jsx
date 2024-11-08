import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics ';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions ';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
class Widged extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickg = e => {
    e.preventDefault();
    let temp = this.state.good;
    temp++;
    this.setState({ good: temp });
  };
  clickn = e => {
    e.preventDefault();
    let temp = this.state.neutral;
    temp++;
    this.setState({ neutral: temp });
  };

  clickb = e => {
    e.preventDefault();
    let temp = this.state.bad;
    temp++;
    this.setState({ bad: temp });
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    return (
      <>
        <Section title="please leave feedback">
          <FeedbackOptions
            options={''}
            onLeaveFeedback={[this.clickg, this.clickn, this.clickb]}
          />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Widged;
