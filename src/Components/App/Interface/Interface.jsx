import React from 'react';
import './Interface.scss';
import { Routes, Route } from 'react-router-dom'
import MenuParameters from './MenuParameters/MenuParameters';
import MenuSkills from './MenuSkills/MenuSkills';

function Interface() {

    // const objectInfo = JSON.parse(localStorage.getItem('characterInfo'));
    // console.log(objectInfo);
    return (
        <div className="interface">
            <Routes>
                <Route path=':MenuParameters' element={<MenuParameters />} />
                <Route path='*/MenuSkills' element={<MenuSkills />} />
            </Routes>
        </div>
    )
};
export default Interface;