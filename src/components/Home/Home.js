import React, { useEffect, useState } from 'react';
import { LabelWithColor } from '../shared/LabelWithColor/LabelWithcolor';
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
        Request(GetApiRoutes('GetPokemons'), {}, _onSuccess, _onFail, 'get');
    };

    const _onSuccess = (data) => {
        setPokemons(data.pokemon);
    };

    const _onFail = (err) => {
        console.log(err);
    };

    const _filter = () => { };

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
                        number={123}
                        name={"Bubasurl"}
                        labels={pokemon.type}
                        image={pokemon.img}
                    />
                ))}
            </div>
        </div>
    );
};
