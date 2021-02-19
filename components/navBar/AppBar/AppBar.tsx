import ToolbarOrganism from '../Toolbar/Toolbar'
import styled from '@emotion/styled'
import React from 'react'
import { Flex, HStack, Stack } from '@chakra-ui/react'

type NavbarProps = {
    children: React.ReactChild
}

const AppBar: React.FC<NavbarProps> = ({
    children
}) => {
    return(
        <Flex w='100%'  minH='90px' bg='#FFFFFF' top='0' borderBottom='1px #f1f1f1 solid' shadow='0px 5px 5px #f1f1f1'>
            <HStack m={['auto 5px auto 5px', 'auto 65px auto 65px']} w='100%'>
                {children}
            </HStack>
        </Flex>
    )
}

export default AppBar