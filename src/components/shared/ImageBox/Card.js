import React from 'react';
import styled from 'styled-components';
import { LabelWithColor } from '../LabelWithColor/LabelWithcolor';

export const Card = ({ image, number, name, labels, sizeImage = '150px' }) => {
    return (
        <BoxImage>
            <ImageContainer size={sizeImage}>
                <Image src={image} />
            </ImageContainer>
            <NumberOfCard>{number}</NumberOfCard>
            <NameCard>{name}</NameCard>
            <ContentLabels>
                {labels.map((label) => (
                    <LabelWithColor color={'green'}>{label}</LabelWithColor>
                ))}
            </ContentLabels>
        </BoxImage>
    );
};

const ContentLabels = styled.div`
    display: flex;
    justifyContent: start;
`;

const ImageContainer = styled.div`
    height: ${props => props.size};
    width: ${props => props.size};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const NumberOfCard = styled.div`
    margin-left: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    color: #7c7777;
    font-weight: 700;
    font-size: 15px;
`;

const NameCard = styled.div`
    display: flex;
    justify-content: start;
    font-weight: 700;
    margin: 5px 0 5px 5px;
`;

const BoxImage = styled.div`
    padding: 10px;
    margin: 10px;
    width: 150px;
    height: 220px;
    border-radius: 4px;
    border: 2px solid #f0f0f0;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 12px #dcdada;
`;