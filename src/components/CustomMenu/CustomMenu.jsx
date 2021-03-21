import React, {useEffect, useState} from "react"
import { MenuWrapperStyled, ButtonMenu, MenuStyled, CloseButton } from "./styles"

const MenuWrapper = ({toOpenMenu}) => {
    return (
        <MenuWrapperStyled onClick={() => toOpenMenu(false)}>
            <MenuStyled>
                <CloseButton onClick={() => toOpenMenu(false)}/>
                <ul>
                    <li>
                        <a href='#'>ТАРИФЫ</a>
                    </li>
                    <li>
                        <a href='#'>ЧТО ТЕБЯ ЖДЁТ НА МАРАФОНЕ</a>
                    </li>
                    <li>
                        <a href='#'>ДЛЯ КОГО МАРАФОН</a>
                    </li>
                    <li>
                        <a href='#'>ПРОГРАММА AB.MONEY</a>
                    </li>
                    <li>
                        <a href='#'>КАКОЙ ИТОГ</a>
                    </li>
                    <li>
                        <a href='#'>ОТЗЫВЫ</a>
                    </li>
                </ul>
            </MenuStyled>
        </MenuWrapperStyled>
    )
}

export const CustomMenu = () => {
    const [isOpen, toOpenMenu] = useState(false);
    
    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [isOpen])
    
    return (
        <>
            <ButtonMenu onClick={() => toOpenMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </ButtonMenu>
            {isOpen ? <MenuWrapper toOpenMenu={toOpenMenu}/> : null}
        </>
    )
}