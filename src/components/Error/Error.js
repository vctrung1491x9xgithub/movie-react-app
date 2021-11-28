import React from 'react'
import { ErrorContainer, ErrorContent, ErrorTitle, ErrorDesc } from './Error.styles'

const Error = ({errorMessage}) => {
    return (
        <ErrorContainer>
            <ErrorContent>
                <ErrorTitle>
                    {errorMessage}
                </ErrorTitle>
                <ErrorDesc>
                {/* Request failed */}
                </ErrorDesc>
            </ErrorContent>
        </ErrorContainer>
    )
}

export default Error
