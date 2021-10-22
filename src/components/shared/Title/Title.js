import styled from "styled-components";

export const Title = styled.span`
    font-family: sans-serif;
    font-size: 20px;
    color: ${props => props.color ? props.color : '#FFFFFF'};
    displey: flex;
    margin-bottom: 15px;
    margin-left: 10px;
    font-weight: ${props => props.isBold ? 'bold' : 'none'}
`;