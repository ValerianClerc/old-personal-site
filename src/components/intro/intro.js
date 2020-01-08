import React from 'react';
import PropTypes from 'prop-types';
import Box from "../box/box";
import Title from "../title/title";

const Intro = ({ data }) => (
  <div>
    <Title as="h1" size="large">Hey!</Title>
    <Title as="h2">
      {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
    </Title>
  </div>
)

Intro.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Intro;
