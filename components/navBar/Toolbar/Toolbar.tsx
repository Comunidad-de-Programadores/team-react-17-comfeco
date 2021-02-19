import styled from '@emotion/styled'
import React from 'react'

type ToolbarProps = {
    children: React.ReactChild
}

const Toolbar = styled.nav<ToolbarProps>`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
`

const ToolbarOrganism: React.FC<ToolbarProps> = ({
    children
}) => {
    return(
        <Toolbar>
            {children}
        </Toolbar>
    )
}

export default ToolbarOrganism