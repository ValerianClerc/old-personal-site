import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box';
import Title from '../title/title';
import { Date, Container, Wrapper, Item, Circle, ItemWrapper } from './experience.css';
import { Grid, GridItem } from '../grid/index';
import Spacer from "../spacer/spacer";
import Img from 'gatsby-image';

const Experience = ({ data }) => (
  <Container id="experience">
    <Title as="h1" size="large">
      Experience
    </Title>
    <Spacer height="3vh" />
    <Wrapper id="experience">
      {data.homeJson.experiences.map((item, i) => (
        <Box key={i}>
          <Circle></Circle>
          <Grid
            templateColumns="2fr 1fr"
            gap="30px"
          >
            <GridItem>
              <Item>
                <Title size="bold">{item.company} </Title>
                <Title>{item.jobTitle} </Title>
                <Title>{item.description}</Title>
              </Item>
            </GridItem>
            <GridItem>
              <figure>
                <Img fluid={item.image ? item.image.childImageSharp.fluid : {}} alt={item.company} />
              </figure>
            </GridItem>
          </Grid>

        </Box>
      ))}
    </Wrapper>
  </Container>
);

Experience.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Experience;
