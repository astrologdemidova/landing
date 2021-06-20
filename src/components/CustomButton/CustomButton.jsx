import * as React from 'react';
import { ButtonStyled } from './styles';

export const CustomButton = ({ children, onClick }) => {
    return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
