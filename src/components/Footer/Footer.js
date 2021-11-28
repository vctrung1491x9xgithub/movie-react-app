
import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { FooterContainer, TextItem, TextLink, TextTitle, TextWrapper } from './Footer.styles'

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextWrapper>
                            <TextItem>
                                <TextTitle>About US</TextTitle>
                                <TextLink to='/' >
                                    Updating...
                                </TextLink>
                                <TextLink to='/' >
                                    Updating...
                                </TextLink>
                                <TextLink to='/' >
                                    Updating...
                                </TextLink>
                            </TextItem>
                        </TextWrapper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextWrapper>
                            <TextItem>
                                <TextTitle>Contact US</TextTitle>
                                <TextLink to='/' >
                                    Facebook: updating...
                                </TextLink>
                                <TextLink to='/' >
                                    Youtube: updating...
                                </TextLink>
                                <TextLink to='/' >
                                    Twitter: updating...
                                </TextLink>
                            </TextItem>
                        </TextWrapper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextWrapper>
                            <TextItem>
                                <TextLink to='' >
                                    @2021 VCTFilms
                                </TextLink>
                            </TextItem>
                        </TextWrapper>
                    </Grid>
                </Grid>
            </Container>
        </FooterContainer>
    )
}

export default Footer
