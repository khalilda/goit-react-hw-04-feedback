import propTypes from 'prop-types';
import SectionModule from './Section.module.css'

export const Section = ({ title, children }) => (
  <section className={SectionModule.header}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};