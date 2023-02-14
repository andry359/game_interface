import React from 'react';
import { useState, useEffect } from 'react';
import './ModalСharacterCreation.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ModalСharacterCreation() {

    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [radioValue, setRadioValue] = useState('man');

    const [formValid, setFormValid] = useState(false);

    function changeRadioValue(e) {
        setRadioValue(e.target.value)
    }

    useEffect(() => {
        if (nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError])

    const nameHandler = (e) => {
        setName(e.target.value);
        setNameError('')
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
        }
    }

    const dispatch = useDispatch();
    useSelector(state => state.name.name = name);
    useSelector(state => state.gender.gender = radioValue);
    const addInitialData = (name, radioValue) => {
        dispatch({ type: 'ADD_NAME', name: name });
        dispatch({ type: 'ADD_GENDER', gender: radioValue })
    };

    return (
        <div className="modal">
            <div className='main__content main-content'>
                <form className='main-content__form form' onSubmit={(e) => {
                    addInitialData(name, radioValue);
                }}>
                    <div className='form__conteiner'>
                        <div className='form__name'>
                            <span>Введите имя ваше персонажа:</span>
                            <div className='nameWrapper'>
                                <input onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} value={name} name='name' type='text' placeholder='введите имя' />
                                {(nameDirty && nameError) && <div>{nameError}</div>}
                            </div>
                        </div>
                        <div className='form__gender gender'>
                            <span>Укажите пол вашего персонажа:</span>
                            <div className='gender__conteiner'>
                                <div className='gender__content'>
                                    <span className='gender__text'>Мужчина</span>
                                    <input type="radio" name='radio' value='man'
                                        checked={radioValue == 'man' ? true : false}
                                        onChange={changeRadioValue} />
                                </div>
                                <div className='gender__content'>
                                    <span className='gender__text'>Женщина</span>
                                    <input type="radio" name='radio' value='woman'
                                        checked={radioValue == 'woman' ? true : false}
                                        onChange={changeRadioValue} />
                                </div>
                            </div>
                        </div>
                        <div className='main-content__button'>
                            <Link to="/Interface/*">
                                <button disabled={!formValid} type='submit'>
                                    Продолжить
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default ModalСharacterCreation;