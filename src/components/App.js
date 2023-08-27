import { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });

  const feedbackNames = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    const { good, neutral, bad } = stats;
    const objectValues = [good, neutral, bad];
    return objectValues.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = stats;
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const handleLeaveFeedback = option => {
    setStats(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          options={feedbackNames}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
