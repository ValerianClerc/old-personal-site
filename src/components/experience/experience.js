import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box';
import Title from '../title/title';
import { Wrapper, Item, Circle, ItemWrapper } from './experience.css';
import { Grid } from '../grid';
import Spacer from "../spacer/spacer";

const Experience = ({ data }) => (
  <div id="experience">
    <Title as="h1" size="large">
      Experience
    </Title>
    <Spacer height="3vh" />
    <Wrapper id="experience">
      {data.homeJson.experiences.map((item, i) => (
        <Box key={i}>
          <Circle></Circle>
          <Item>

            <Title size="bold">{item.company} </Title>
            <Title>{item.jobTitle} </Title>
            <Title>{item.description}</Title>
          </Item>
        </Box>
      ))}
    </Wrapper>
  </div>
);

Experience.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Experience;
