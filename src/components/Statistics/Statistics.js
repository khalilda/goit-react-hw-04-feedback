import propTypes from 'prop-types';
import StatisticsModule from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={StatisticsModule.list}>
    <li>Good: {good} votes</li>
    <li>Neutral: {neutral} votes</li>
    <li>Bad: {bad} votes</li>
    <li>Total: {total} votes</li>
    <li className={StatisticsModule.positiv}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number,
  fpositivePercentage: propTypes.number,
};
