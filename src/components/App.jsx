import { Component } from 'react';
import React from 'react';

import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    if (event === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (event === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (event === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '50px',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '620px',
          width: '470px',
          fontSize: 26,
          color: '#000000',
          borderRadius: '13px',
          boxShadow: '0px 1px 1px rgba(0.9, 0.9, 0.9, 0.9)',
          backgroundColor: '#907d7d',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
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
      </div>
    );
  }
}



