import { theme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

type FooterProps = {
    children?: React.ReactChild
}

const FooterStyle = styled.footer`
    margin-top: 100px;
    padding: 0px;
    bottom: 0px;
    min-height: 150px;
    max-height: 200px;
    background-color: #6b46c1; 
`

const Footer: React.FC<FooterProps> = ({
    children
}) => {
    return(
        <FooterStyle>
           {children}
        </FooterStyle>
    )
}

export default Footer