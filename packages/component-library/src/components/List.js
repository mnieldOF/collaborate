import React from 'react';
import styled from '@emotion/styled';
import {Icon} from '@openfrequency/component-library';

const ListStyled = styled.ul`
    list-style: none;
    li{
        display: flex;
        align-items: center;
        color: #17324a;
    }
`

const List = ({ icon, text }) => {
    return(
        <ListStyled>
            <li><Icon icon={icon ? icon : 'check-o'} width='20px' mr='15px' />{text ? text : 'list text'}</li>
            <li><Icon icon={icon ? icon : 'check-o'} width='20px' mr='15px' />{text ? text : 'list text'}</li>
            <li><Icon icon={icon ? icon : 'check-o'} width='20px' mr='15px' />{text ? text : 'list text'}</li>
            <li><Icon icon={icon ? icon : 'check-o'} width='20px' mr='15px' />{text ? text : 'list text'}</li>
            <li><Icon icon={icon ? icon : 'check-o'} width='20px' mr='15px' />{text ? text : 'list text'}</li>
        </ListStyled>
    )
}

export default List;