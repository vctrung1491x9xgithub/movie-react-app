import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ModalTrailer from '../ModalTrailer/ModalTrailer';
import { CarouselItem, TrailerContainer } from './Trailer.styles';

const Trailer = ({ id, mediaType }) => {
    const [trailers, setTrailers] = useState([]); 
    const [videoKey, setVideoKey] = useState("");
 
    const getTrailer = async () => {
        const url = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
        const { data } = await axios.get(url);
        setTrailers(data.results);
    };
    
    useEffect(() => {
        getTrailer();  
        return () => {
            setTrailers([]);  
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // 
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1980,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const renderItems = () => {
        let items = null;
        items = trailers.map((video) => (
            <CarouselItem 
                key={video.key} 
                onClick={() => setVideoKey(video.key)} 
            >
                <img 
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    alt=""
                />
            </CarouselItem>
        ));
        return items;
    }
    // 

    return (
        <TrailerContainer>
            <p>Trailer:</p>
            <Slider {...settings}>
                {renderItems()}
            </Slider>
            {
                videoKey !== '' && (
                    <ModalTrailer 
                        videoKey={videoKey}
                        setVideoKey={setVideoKey}
                />
                )
            }
        </TrailerContainer>
    )
}

export default Trailer
