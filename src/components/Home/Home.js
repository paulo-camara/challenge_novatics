import React, { useEffect, useState } from 'react';
import { Filter } from '../shared/Filter/Filter';
import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { Card } from '../shared/ImageBox/Card';
import { PokemonDetailModal } from './PokemonDetailModal/PokemonDetailModal';
import { Request } from '../../scripts/Request';
import toastr from 'toastr';

export const Home = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
        _getPokemons();
    }, []);

    const _getPokemons = () => {
        Request(
            GetApiRoutes('GetPokemons'),
            {},
            ({ pokemon }) => _filter(pokemon),
            (err) => err,
            'get'
        );
    };

    const _filter = (pokemons) => {
        const pokemonsFiltered = _getPokemonsFiltered(pokemons);

        if (!pokemonsFiltered.length) {
            return toastr.error("Sorry, not found pokemon")
        }

        setPokemons(pokemonsFiltered);
    };

    const _getPokemonsFiltered = (data) => {
        const valueFilter = _normalizeToString(valueInput);

        return data.filter(pokemon => {
            return _normalizeToString(pokemon.num) === valueFilter ||
                _normalizeToString(pokemon.name).includes(valueFilter) ||
                _normalizeToString(`#${pokemon.num}`) === valueFilter;
        });
    };

    const _normalizeToString = (value) => {
        return value.toString().toLowerCase();
    };

    const _onChange = (event) => {
        setValueInput(event.target.value);

        if (event.keyCode === 13) _getPokemons();
    };

    return (
        <div className="home-page">
            <div className="header">
                <Filter
                    onChange={_onChange}
                    value={valueInput}
                    onClick={_getPokemons}
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
            <PokemonDetailModal
                isOpen={isOpenModal}
                onCloseModal={setIsOpenModal}
                pokemon={selectedPokemon}
            />
        </div>
    );
};
