import React, { useEffect, useState } from 'react';
import { Filter } from '../shared/Filter/Filter';
import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { Request } from '../../scripts/Request';
import { Card, ImageContainer, Image } from '../shared/ImageBox/Card';
import { Modal } from '../shared/Modal/Modal';
import { Title } from '../shared/Title/Title';
import styled from 'styled-components';

export const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        _getPokemons();
    }, []);

    const _getPokemons = () => {
        Request(
            GetApiRoutes('GetPokemons'),
            {},
            ({ pokemon }) => setPokemons(pokemon),
            (err) => err,
            'get'
        );
    };

    const _filter = () => {
        if (!valueInput) {
            _getPokemons();
        } else {
            const pokemonsFiltered = _getPokemonsFiltered();

            setPokemons(pokemonsFiltered);
        }
    };

    const _getPokemonsFiltered = () => {
        const valueFilter = _normalizeToString(valueInput);

        return pokemons.filter(pokemon => {
            return _normalizeToString(pokemon.num) === valueFilter ||
                _normalizeToString(pokemon.name).includes(valueFilter);
        });
    };

    const _normalizeToString = (value) => {
        return value.toString().toLowerCase();
    };

    return (
        <div className="home-page">
            <div className="header">
                <Filter
                    onChange={setValueInput}
                    value={valueInput}
                    onClick={_filter}
                />
            </div>
            <div className="content-body-page">
                {pokemons.map((pokemon) => (
                    <Card
                        number={pokemon.num}
                        name={pokemon.name}
                        labels={pokemon.type}
                        image={pokemon.img}
                        onClick={() => {
                            setSelectedPokemon(pokemon);
                            setIsOpenModal(true)
                        }}
                    />
                ))}
            </div>
            {selectedPokemon && <Modal
                isOpen={isOpenModal}
                title={`About ${selectedPokemon.name}`}
                onCancel={() => setIsOpenModal(false)}
            >
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {selectedPokemon.weaknesses && <div>
                            <Title isBold={true} color={'#000000'}>Weaknesses</Title>
                            <ItemInformation>
                                {selectedPokemon.weaknesses.map((item, index) => <span>{`${index + 1}-${item}`}</span>)}
                            </ItemInformation>
                        </div>}
                        {selectedPokemon.next_evolution && <div>
                            <Title isBold={true} color={'#000000'}>Next Evolution</Title>
                            <ItemInformation>
                                {selectedPokemon.next_evolution.map((item) => <span>{`${item.num}-${item.name}`}</span>)}
                            </ItemInformation>
                        </div>}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '180px' }}>
                        <ImageContainer>
                            <Image src={selectedPokemon.img} />
                        </ImageContainer>
                    </div>
                </div>
            </Modal>}
        </div>
    );
};

const ItemInformation = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
`;
