import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './tab.css';
import { Link } from 'gatsby';

const Tab = ({ title, link }) => (
    <div>
        <Link to={link}>
            <Title>{title}</Title>
        </Link>
    </div>
);

Tab.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

export default Tab;
