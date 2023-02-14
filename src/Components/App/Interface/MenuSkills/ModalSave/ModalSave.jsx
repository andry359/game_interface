import './ModalSave.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ModalSave(props) {

    const characterInfo = useSelector(state => state.skills);

    function saveCharacter() {
        if (props.active) {
            JSON.stringify(characterInfo);
            localStorage.setItem('characterInfo', JSON.stringify(characterInfo));
        }
    };

    return (
        <div className={props.active ? 'modalSave _active' : 'modalSave'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'modalSave__content _active' : "modalSave__content"} onClick={e => e.stopPropagation()}>
                <div className='modalSave__content__text'>
                    <p>Хотите сохранить созданного персонажа?</p>
                </div>
                <div className='modalSave__content__button'>
                    <Link to='/Interface/*'>
                        <button type='submit' onClick={saveCharacter}>
                            Сохранить персонажа
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default ModalSave;