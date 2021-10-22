import styled from 'styled-components';

export const LabelWithColor = styled.span`
    background-color: ${props => props.color};
    height: 10px;
    padding: 4px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 12px;
    font-family: sans-serif;
    margin: 5px;
    border-radius: 3px;
`;