import React from 'react'
import {
    ButtonMenu,
} from './styles'
import { 
    contentTypeMenu
} from '../CatalogWrapper/CatalogWrapper';

export const CustomCollapse = ({setContentType}) => {
    return (
        <a href='#anchor'>
            <ButtonMenu onClick={() => setContentType(contentTypeMenu)}>
                свернуть
            </ButtonMenu>
        </a>
    )
}
