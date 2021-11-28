import VisibilityIcon from '@material-ui/icons/Visibility';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import StarRatings from 'react-star-ratings';
import { img_300, unavailable } from '../../config/config';
import { ItemWrapper, Item, ItemBottom, ItemButtonDelete, ItemContent, ItemDate, ItemMedia, ItemName, ItemPopularity, ItemTitle } from './SingleContent.styles';
import useSlug from '../../hooks/useSlug';
import ClearIcon from '@material-ui/icons/Clear';
import DateRangeIcon from '@material-ui/icons/DateRange';
import useConvertDate from '../../hooks/useCovertDate';

const SingleContent = ({ item, media_type, collection, deleteCollection }) => {
    const { poster_path, title, name, vote_average, popularity, release_date, first_air_date, id } = item;
    let mainName = title ? title : name;
    mainName = useSlug(mainName);
    const mediaType = media_type === 'Tv Series' ? 'tv' : media_type.toLowerCase();

    const onHandleDelete = id => {
        deleteCollection(id);
    }
    return (
        <ItemWrapper>
            {
                collection && <ItemButtonDelete
                    onClick={() => { onHandleDelete(id) }}
                >
                    <ClearIcon />
                </ItemButtonDelete>
            }
            <Item
                to={`/watch/${mediaType}/${mainName}-${id}`}
                media_type={media_type}
            >
                <ItemMedia src={poster_path ? `${img_300}/${poster_path}` : unavailable} />
                <ItemContent>
                    <ItemTitle>
                        {title || name}
                    </ItemTitle>
                    <StarRatings
                        numberOfStars={10}
                        starRatedColor="#C2210C"
                        rating={vote_average}
                        starDimension="14px"
                        starSpacing="1px"
                    />
                    <ItemBottom>
                        <ItemPopularity>
                            <VisibilityIcon style={{ color: '#EEB406', marginRight: '5px' }} />
                            {popularity}
                        </ItemPopularity>
                        <ItemDate>
                            <DateRangeIcon
                                style={{ fontSize: '15px', marginRight: '5px' }}
                                    />
                                    { useConvertDate(release_date || first_air_date)}
                        </ItemDate>
                    </ItemBottom>
                </ItemContent>
                <ItemName>
                    <p>{title || name}</p>
                    <PlayCircleFilledWhiteOutlinedIcon fontSize="large" style={{ color: "#febb13" }} />
                </ItemName>
            </Item>

        </ItemWrapper>
    )
}

export default SingleContent
