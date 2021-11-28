 
import { ModalContent, ModalContainer, ModalWrapper, ModalHeader, CloseModal } from './ModalTrailer.styles';

const ModalTrailer = ({ setVideoKey, videoKey }) => {

    const onCloseModal = () => {
        setVideoKey("");
    }
    return (
        <ModalWrapper onClick={onCloseModal}>
            <ModalContainer>
                <ModalHeader>
                    <CloseModal onClick={onCloseModal} />
                </ModalHeader>
                <ModalContent>
                    <iframe
                        title="video"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    ></iframe>
                </ModalContent>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default ModalTrailer
