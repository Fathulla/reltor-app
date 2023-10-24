import React from 'react';
import './AppModal.css'

interface IAppModal {
    active: boolean;
    setActive: (active: boolean) => void;
    modalText: string;
}

export const AppModal = ({active, setActive, modalText}: IAppModal) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {modalText}
            </div>
        </div>
    );
};