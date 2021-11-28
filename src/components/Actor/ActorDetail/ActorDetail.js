
import React, { Fragment } from 'react';
import { ActorInfo, ActorInfoItem, ActorName, Biography } from './ActorDetail.styles';

const ActorDetail = ({ ActorData }) => {
    
    return (
        <Fragment>
            <ActorName>{ActorData.name}</ActorName>
            <ActorInfo>
                <ActorInfoItem>
                    Gender:
                    <span> {ActorData.gender === '1' ? 'Female' : 'Male'}</span>
                </ActorInfoItem>
                <ActorInfoItem>
                    Birth day:
                    <span> 
                        {
                             ActorData.birthday || ' Updating'
                        }
                    </span>
                </ActorInfoItem>
                {
                    ActorData.deathday !== null && (
                        <ActorInfoItem>
                            Death day:
                            <span> {ActorData.deathday}</span>
                        </ActorInfoItem>
                    )
                }
                <ActorInfoItem>
                    Also known as:
                    <span>
                        {
                            ActorData.also_known_as.lenght > 0 ? ActorData.also_known_as.map((x, index) => (index ? ', ' : ' ') + x
                            ) 
                            :  'Updating...'
                           
                        }
                    </span>
                </ActorInfoItem>
                <ActorInfoItem>
                    Place of birth:
                    <span> {ActorData.place_of_birth || 'Updating'}</span>
                </ActorInfoItem>
            </ActorInfo>
            {
                ActorData.biography !== '' && (
                    <Biography>
                        <p>Biography:</p>
                        {ActorData.biography}
                    </Biography>
                )
            }
        </Fragment>
    )
}

export default ActorDetail
