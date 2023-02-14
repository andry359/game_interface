import { createStore, combineReducers } from 'redux';
import { nameReducer } from './nameReducer';
import { genderReducer } from './genderReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pointsReducer } from './pointsReducer';
import { skillsReducer } from './skillsReducer';
import { mainPointsReducer } from './mainPointsReducer';

export const defaultState = {
    name: '',
    character: {
        gender: 'man',
        points: 25,
        basicParameters: [
            { id: 1, parameters: 'Сила', point: 0 },
            { id: 2, parameters: 'Ловкость', point: 0 },
            { id: 3, parameters: 'Интелект', point: 0 },
            { id: 4, parameters: 'Харизма', point: 0 },
        ],
        minorParameters: [
            { id: 1, parameters: 'Жизненная сила', point: 3 },
            { id: 2, parameters: 'Уклонение', point: 10 },
            { id: 3, parameters: 'Энергичность', point: 0 },
        ],
        skills: [
            { id: 1, skill: 'Атака', point: 0 },
            { id: 2, skill: 'Стелс', point: 0 },
            { id: 3, skill: 'Стрельба из лука', point: 0 },
            { id: 4, skill: 'Обучаемость', point: 0 },
            { id: 5, skill: 'Выживание', point: 0 },
            { id: 6, skill: 'Медицина', point: 0 },
            { id: 7, skill: 'Запугивание', point: 0 },
            { id: 8, skill: 'Проницательность', point: 0 },
            { id: 9, skill: 'Внешний вид', point: 0 },
            { id: 10, skill: 'Манипулирование', point: 0 },
        ]
    }
};

const rootReducer = combineReducers({
    name: nameReducer,
    gender: genderReducer,
    mainPoints: mainPointsReducer,
    points: pointsReducer,
    skills: skillsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());