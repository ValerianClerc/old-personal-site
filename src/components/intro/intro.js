import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box';
import Title from '../title/title';
import Contact from '../contact/contact'

const Intro = ({ data }) => (
  <Box>
    <Title as="h1" size="large">
      Hey!
    </Title>
    <Title as="h2">
      {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
    </Title>
  </Box>
);

Intro.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Intro;
