import React from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export const Filter = ({ onChange, value, onClick }) => {
    return (
        <div className="filter-container">
            <Title>Name Or Number</Title>
            <div className="filter-fields">
                <Input onChange={onChange} value={value} />
                <Button title="Search" onClick={onClick} />
            </div>
        </div>
    );
};
