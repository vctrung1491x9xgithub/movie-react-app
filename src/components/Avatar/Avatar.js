
import React, { useEffect, useState } from 'react'
import { img_300, unavailable } from '../../config/config';
import { Poster, PosterItem, PosterItemContainer, PosterItemImg, AvatarContainer } from './Avatar.styles';

const Avatar = ({ imagePath, imageTitle, ActorID }) => {
    const [url, setUrl] = useState(imagePath);
    const [images, setImages] = useState([]); 
 
    const setPosterUrl = (posterUrl) => {
        setUrl(posterUrl);
    }
    // 
    const getImages = async () => {
        const url = `https://api.themoviedb.org/3/person/${ActorID}/images?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        setImages(data.profiles);
    }; 
    
    useEffect(() => {
        if (ActorID) {
            getImages();
        }
        return () => { 
            setUrl(null);
        }
    }, [ActorID]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <AvatarContainer>
            <Poster
                src={`${url !== null ? img_300 + url : unavailable}`}
                alt={imageTitle}
                title={imageTitle}
            />
            {
                ActorID && (
                    <PosterItemContainer>

                        {
                            images.length > 0 && images.map(image => {
                                return (
                                    <PosterItem 
                                        Active={url === image.file_path ? 'true' : 'false'}
                                        key={image.file_path} 
                                        onClick={() => setPosterUrl(image.file_path)}
                                    >
                                        <PosterItemImg
                                            src={`https://image.tmdb.org/t/p/w220_and_h330_face${image.file_path}`}
                                        />
                                    </PosterItem>
                                )
                            })
                        }

                    </PosterItemContainer>
                )
            }
        </AvatarContainer>
    )
}

export default Avatar
