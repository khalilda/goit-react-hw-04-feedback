import propTypes from 'prop-types';
import FeedbackModule from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={FeedbackModule.wrapper}>
    {options.map((option, index) => (
      <button
        className={FeedbackModule.buttons}
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};