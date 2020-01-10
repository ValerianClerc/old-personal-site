import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import Spacer from '../components/spacer/spacer';
import { Grid, GridItem } from '../components/grid/index';
import Menu from '../components/menu/menu';
import Intro from '../components/intro/intro';
import Experience from '../components/experience/experience';
import Projects from '../components/projects/projects';

const Index = ({ data }) => (
  <Layout>
    <Grid
      width="100%"
      height="100vh"
      templateColumns="1fr 4fr"
      gap="10px"
      // autoRows="minmax(100px, auto)"
    >
      <GridItem column="1" row="1/3">
        <Menu items={data.homeJson.tabs}></Menu>
      </GridItem>
      <GridItem column="2" row="1/3">
        <Box>
          <Intro data={data}></Intro>
          <Spacer />
          <Experience data={data}></Experience>
          <Spacer />
          <Projects data={data}></Projects>
        </Box>

        <Spacer />
        {/* <IOExample /> */}
      </GridItem>
    </Grid>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      tabs {
        title
        link
      }
      experiences {
        company
        jobTitle
        description
        dates
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
