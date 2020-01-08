import React from 'react';
import PropTypes from 'prop-types';
import { Container, Sticky } from './menu.css';
import Tab from "./tab/tab";

const Menu = ({ items }) => (
    <Sticky>
        <Container>
            {items.map((item, i) => (
                <Tab {...item} key={i} />
            ))}
        </Container>
    </Sticky>
);

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
