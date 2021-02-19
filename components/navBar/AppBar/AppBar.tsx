import ToolbarOrganism from '../Toolbar/Toolbar'
import styled from '@emotion/styled'
import React from 'react'

type NavbarProps = {
    children: React.ReactChild
    bgColor?: string
}

const Navbar = styled.nav<NavbarProps>`
    width: 100%;
    min-height: 90px;
    background-color: ${({bgColor}) => bgColor ? bgColor : '#FFFFFF'};
    top: 0px;
    border-bottom: 1px #f1f1f1 solid;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 5px #f1f1f1;
`

const AppBar: React.FC<NavbarProps> = ({
    children,
    bgColor
}) => {
    return(
        <Navbar bgColor={bgColor}>
            <ToolbarOrganism>
                {children}
            </ToolbarOrganism>
        </Navbar>
    )
}

export default AppBar