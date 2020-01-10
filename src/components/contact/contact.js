import React from 'react';
import { Grid, GridItem } from '../grid/index';
import Title from '../title/title';
import Box from '../box/box';

const Contact = () => (
    <div id="contact">
        <Title as="h1" size="large">Contact me!</Title>
        <Box>
            <Grid
                width="100%"
                templateColumns="1fr"
                gap="10px"
            >
                <GridItem column="1" row="1">
                    <Title as="h2" size="bold">Email</Title>
                </GridItem>
                <GridItem column="1" row="2">
                    <Title as="h2" size="bold">Github</Title>
                </GridItem>
                <GridItem column="1" row="3">
                    <Title as="h2" size="bold">LinkedIn</Title>
                </GridItem>
                <GridItem column="1" row="4">
                    <Title as="h2" size="bold">Twitter</Title>
                </GridItem>
            </Grid>
        </Box>
    </div>
)

export default Contact;