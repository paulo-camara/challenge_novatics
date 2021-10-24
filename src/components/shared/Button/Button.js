import React from 'react';
import styled from 'styled-components';

export const Button = ({ title, onClick, color }) => {
    return <ButtonContainer>
        <ButtonStyled onClick={onClick} color={color}>
            {title}
        </ButtonStyled>
    </ButtonContainer>
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ButtonStyled = styled.button`
    background-color: ${props => props.color ? props.color : '#ee6b2f'};
    min-width: 70px;
    height: 35px;
    color: #FFFFFF;
    border-radius: 3px;
    outline: 0;
    border: 0;
    cursor: pointer;
`;