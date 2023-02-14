import React from 'react';
import './ModalGreetings.scss';
import NewCharacter from './NewCharacter/NewCharacter';
import ChooseCharacter from './ChooseCharacter/ChooseCharacter';

function ModalGreetings() {

    const isCharacter = !!localStorage.getItem('characterInfo');

    return (
        <div className="modal">
            {isCharacter ? <ChooseCharacter /> : <NewCharacter />}
        </div>
    )
};
export default ModalGreetings;