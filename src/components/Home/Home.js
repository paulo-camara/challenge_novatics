import React, { useEffect, useState } from 'react';
import { Filter } from '../shared/Filter/Filter';
import { GetApiRoutes } from '../../scripts/ApiRoutes';
import { Request } from '../../scripts/Request';
import { Card } from '../shared/ImageBox/Card';

export const Home = () => {
    const [valueInput, setValueInput] = useState('');
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        _getPokemons();
    }, []);

    const _getPokemons = () => {
        Request(
            GetApiRoutes('GetPokemons'),
            {},
            ({ pokemon }) => setPokemons(pokemon),
            (err) => err,
            'get');
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
                    />
                ))}
            </div>
        </div>
    );
};
