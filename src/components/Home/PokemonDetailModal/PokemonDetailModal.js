import React from 'react';
import styled from 'styled-components';
import { ImageContainer, Image } from '../../shared/ImageBox/Card';
import { Modal } from '../../shared/Modal/Modal';
import { Title } from '../../shared/Title/Title';

export const PokemonDetailModal = ({ pokemon, isOpen, onCloseModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            title={`About ${pokemon.name}`}
            onCancel={() => onCloseModal(false)}
        >
            <div>
                <ItemInformationContainer>
                    {pokemon.weaknesses && <div>
                        <Title isBold={true} color={'#000000'}>Weaknesses</Title>
                        <ItemInformation>
                            {pokemon.weaknesses.map((item, index) => <span>{`${index + 1}-${item}`}</span>)}
                        </ItemInformation>
                    </div>}
                    {pokemon.next_evolution && <div>
                        <Title isBold={true} color={'#000000'}>Next Evolution</Title>
                        <ItemInformation>
                            {pokemon.next_evolution.map((item) => <span>{`${item.num}-${item.name}`}</span>)}
                        </ItemInformation>
                    </div>}
                </ItemInformationContainer>
                <ApresentationPokemonContainer>
                    <ImageContainer>
                        <Image src={pokemon.img} />
                    </ImageContainer>
                </ApresentationPokemonContainer>
            </div>
        </Modal>
    );
};

const ApresentationPokemonContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 200px;
`;

const ItemInformationContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ItemInformation = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
`;
