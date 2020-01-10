import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/title';
import Box from '../box/box';

const Projects = ({ data }) => (
  <div id="projects">
    <Title as="h1" size="large" id="projects">Projects</Title>
    <Box>
      <Title as="h2" size="bold">Coming soon!</Title>
    </Box>
  </div>
)

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;
