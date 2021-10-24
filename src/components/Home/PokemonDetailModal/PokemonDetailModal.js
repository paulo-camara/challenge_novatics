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
                    {pokemon.weaknesses && <div style={{ marginRight: '50px' }}>
                        <Title isBold={true} color={'#ee6b2f'}>Weaknesses</Title>
                        <ItemInformation>
                            {pokemon.weaknesses.map((item, index) => <li>{item}</li>)}
                        </ItemInformation>
                    </div>}
                    {pokemon.next_evolution && <div>
                        <Title isBold={true} color={'#ee6b2f'}>Next Evolution</Title>
                        <ItemInformation>
                            {pokemon.next_evolution.map((item) => <li>{`${item.num} - ${item.name}`}</li>)}
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
    height: 180px;
`;

const ItemInformationContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ItemInformation = styled.ul`
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
`;
