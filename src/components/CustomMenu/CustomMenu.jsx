import React, { useEffect, useState } from 'react';
import { MenuWrapperStyled, ButtonMenu, MenuStyled, CloseButton } from './styles';
import { Link } from 'react-scroll';

const MenuWrapper = ({ toOpenMenu }) => {
    return (
        <MenuWrapperStyled onClick={() => toOpenMenu(false)}>
            <MenuStyled>
                <CloseButton onClick={() => toOpenMenu(false)}>
                    {/* <div></div>
                    <div></div> */}
                    +
                </CloseButton>
                <ul>
                    <li>
                        <Link
                            to="tariff"
                            smooth={true}
                            duration={700}
                            delay={100}
                            href=""
                            onClick={() => toOpenMenu(false)}>
                            ТАРИФЫ
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="description" smooth={true} duration={700} delay={100} href='' onClick={() => toOpenMenu(false)}>ЧТО ТЕБЯ ЖДЁТ НА МАРАФОНЕ</Link>
                    </li> */}
                    <li>
                        <Link
                            to="reason"
                            smooth={true}
                            duration={700}
                            delay={100}
                            href=""
                            onClick={() => toOpenMenu(false)}>
                            ДЛЯ КОГО МАРАФОН
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="program"
                            smooth={true}
                            duration={700}
                            delay={100}
                            href=""
                            onClick={() => toOpenMenu(false)}>
                            программа
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="result"
                            smooth={true}
                            duration={700}
                            delay={100}
                            href=""
                            onClick={() => toOpenMenu(false)}>
                            КАКОЙ ИТОГ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="review"
                            smooth={true}
                            duration={700}
                            delay={100}
                            href=""
                            onClick={() => toOpenMenu(false)}>
                            ОТЗЫВЫ
                        </Link>
                    </li>
                </ul>
            </MenuStyled>
        </MenuWrapperStyled>
    );
};

export const CustomMenu = () => {
    const [isOpen, toOpenMenu] = useState(false);

    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');
    }, [isOpen]);

    return (
        <>
            <ButtonMenu onClick={() => toOpenMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </ButtonMenu>
            {isOpen ? <MenuWrapper toOpenMenu={toOpenMenu} /> : null}
        </>
    );
};
