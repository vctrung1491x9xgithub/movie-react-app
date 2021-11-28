import './GlobalLoading.styles';
import { Loading, LoadingContainer, LoadingImg } from './GlobalLoading.styles';
import loadingImg from '../../assets/images/loading.svg'
import { useSelector } from 'react-redux';
const GlobalLoading = () => {

    const showLoading = useSelector(state => state.ui.showLoading);
    if(showLoading === true) 
    return (
        <LoadingContainer>
            <Loading>
                <LoadingImg src={loadingImg} alt='' />
            </Loading>
        </LoadingContainer>
    )
    return null;
}

export default GlobalLoading
