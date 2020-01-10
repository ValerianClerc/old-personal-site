import React from 'react';
import PropTypes from 'prop-types';
import { Entry } from './tab.css';
import { Link } from 'gatsby';

const Tab = ({ title, link }) => (
  <div>
    <Link to={link} style={{ color: 'black', textDecoration: 'none' }}>
      <Entry>{title}</Entry>
    </Link>
  </div>
);

Tab.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Tab;
