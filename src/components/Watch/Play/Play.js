import React, { Fragment, useEffect, useState } from 'react' 
import { Grid } from '@material-ui/core';
import {  InfoName, InfoRow, Button, Iframe } from './Play.styles';

const Play = ({ trailer }) => {
    
    console.log(trailer);
    const keyList = trailer.reduce((acc, item) => {
        if (item.type === "Trailer") {
            acc.push(item.key);
        }
        return acc;
    }, []);

    const nameList = trailer.reduce((acc, item) => {
        if (item.type === "Trailer") {
            acc.push(item.name);
        }
        return acc;
    }, []);

    return (
        <Fragment>
            {
                trailer.length > 0 &&
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12}>
                            <Iframe
                                title="video"
                                width="100%"
                                height="600"
                                src={`https://www.youtube.com/embed/${keyList[0]}?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen=""
                            ></Iframe>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <InfoRow> 
                                    <InfoName>
                                        {nameList[0]}
                                    </InfoName>  
                                    <Button
                                        href={`https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=${keyList[0]}`}
                                        target="_blank"
                                    >
                                        Share <span>⤴</span>
                                    </Button> 
                                    <Button Color="#c2210c">
                                        Report <span>!</span>
                                    </Button> 
                            </InfoRow>
                        </Grid>
                    </Grid> 
            }
        </Fragment>
    )
}

export default Play
