import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MenuParameters.scss';
import { ReactComponent as Male } from '../icons/male.svg';
import { ReactComponent as Woman } from '../icons/woman.svg';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import ParametersInfo from './ParametersInfo/ParametersInfo';
import MinorParametersInfo from './MinorParametersInfo/MinorParametersInfo';
import NameCharacter from './NameCharacter/NameCharacter';
import { Link } from 'react-router-dom';

function MenuParameters() {

    const dispatch = useDispatch();
    const objectInfo = useSelector(state => state);
    const pointsInfo = !!(objectInfo.points.name && objectInfo.points?.gender) ? objectInfo.points : JSON.parse(localStorage.getItem('characterInfo'));
    const [basePoints, setBasePoints] = useState(pointsInfo.character.points);

    const deleteBasePoints = () => {
        setBasePoints(basePoints - 1);
        dispatch({ type: 'ADD_POINTS', points: basePoints - 1 });
    }
    const addBasePoints = () => {
        setBasePoints(basePoints + 1);
        dispatch({ type: 'ADD_POINTS', points: basePoints + 1 });
    }

    return (
        <div className="optionsMenu">
            <NameCharacter name={pointsInfo.name} />
            <div className="mainParameters">
                <div className='optionsMenu__character character'>
                    {pointsInfo.gender === 'man' ?
                        <Male width='300' height='410' /> :
                        <Woman width='300' height='410' />}
                </div>
                <div className='optionsMenu__options options'>
                    <div className='options__statPoints'>
                        <span>
                            {basePoints}
                        </span>
                    </div>
                    <div className='options__basicParameters'>
                        <h3 className='title'>Базовые параметры:</h3>
                        <div className="parameters">
                            <ParametersInfo basePoints={basePoints} deleteBasePoints={deleteBasePoints} addBasePoints={addBasePoints} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='minorParameters'>
                <h3 className='title'>Второстепенные параметры:</h3>
                <MinorParametersInfo />
            </div>
            <div className='forward'>
                <Link to='MenuSkills'>
                    <Arrow className="arrow" width='30' height='30' />
                </Link>
            </div>
        </div>
    )
};
export default MenuParameters;