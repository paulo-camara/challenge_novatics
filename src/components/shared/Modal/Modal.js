import React from 'react';
import { Button } from '../Button/Button';

export const Modal = ({ isOpen, title, children, onCancel }) => {
    return isOpen && <div className="modal-container">
        <div className="modal">
            <div className="header-modal">
                {title}
            </div>
            <div className="body-modal">
                {children}
            </div>

            <div className="actions">
                <Button title={"Fechar"} onClick={onCancel} />
            </div>
        </div>
    </div>
};