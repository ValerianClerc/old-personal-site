import React from 'react';
import { Grid, GridItem } from '../grid/index';
import Title from '../title/title';
import Box from '../box/box';
import Img from 'gatsby-image';
import { Entry, Text } from "./contact.css";

const Contact = ({ data }) => (
    <div id="contact">
        <Title as="h1" size="large">Contact me!</Title>
        {data.homeJson.contact.map((item, i) => (
            <Entry key={i}>
                <Grid
                    width="80%"
                    templateColumns="1fr 5fr"
                    gap="3em"
                >

                    <GridItem column="1" row="1">
                        <a href={item.link}>
                            <figure>
                                <Img fixed={item.image ? item.image.childImageSharp.fixed : {}} alt={item.link} />
                            </figure>
                        </a>
                    </GridItem>
                    <GridItem column="2" row="1">
                        <a href={item.link}>
                            <Text>
                                <Title as="h2" size="bold">{item.content}</Title>
                            </Text>
                        </a>
                    </GridItem>
                </Grid>
            </Entry>
        ))}
    </div>
)

export default Contact;