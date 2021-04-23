import React, { useEffect, useState } from 'react'
import { CustomButton } from '../../CustomButton';
import {
    MenuWrapperStyled,
    ButtonMenu,
    MenuStyled,
    CloseButton,
} from './styles'
import { 
    contentTypeConsultation, 
    contentTypeMeditation, 
    contentTypeRitual, 
    // contentTypeStones 
} from '../CatalogWrapper/CatalogWrapper';

const MenuWrapper = ({ toOpenMenu, setContentType }) => {
    const clickHandler = (contentType) => {
        setContentType(contentType)
        return toOpenMenu(false)
    }
    return (
        <MenuWrapperStyled onClick={() => toOpenMenu(false)}>
            <MenuStyled>
                <CloseButton onClick={() => toOpenMenu(false)}>+</CloseButton>
                <ul>
                    <li>
                        <CustomButton onClick={() => clickHandler(contentTypeRitual)}>Ритуалы</CustomButton>
                    </li>
                    <li>
                        <CustomButton onClick={() => clickHandler(contentTypeMeditation)}>Медитации</CustomButton>
                    </li>
                    <li>
                        <CustomButton onClick={() => clickHandler(contentTypeConsultation)}>Консультации</CustomButton>
                    </li>
                    {/* <li>
                        <CustomButton onClick={() => clickHandler(contentTypeStones)}>Камни</CustomButton>
                    </li> */}
                </ul>
            </MenuStyled>
        </MenuWrapperStyled>
    )
}

export const CustomMenuShop = ({setContentType}) => {
    const [isOpen, toOpenMenu] = useState(false)

    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset')
    }, [isOpen])

    return (
        <>
            <ButtonMenu onClick={() => toOpenMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </ButtonMenu>
            {isOpen ? <MenuWrapper {...{toOpenMenu, setContentType}}/> : null}
        </>
    )
}
