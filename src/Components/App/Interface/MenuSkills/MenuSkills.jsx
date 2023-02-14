import React from 'react';
import { useState } from 'react';
import './MenuSkills.scss';
import { ReactComponent as Arrow } from '../icons/arrow.svg';
import SkillComponent from './SkillComponent/SkillComponent';
import SkillsTitle from './SkillsTitle/SkillsTitle';
import ModalSave from './ModalSave/ModalSave';

function MenuSkills() {

    const [modalSaveActive, setModalSaveActive] = useState(false);

    return (
        <div className="optionsSkills skills">

            <div className='skills__title'>
                <SkillsTitle />
            </div>
            <div className='skills__content'>
                <SkillComponent />
            </div>
            <div className='forward' onClick={() => setModalSaveActive(true)}>
                <Arrow className="arrow" width='30' height='30' />
            </div>
            <ModalSave active={modalSaveActive} setActive={setModalSaveActive} />
        </div>
    )
};
export default MenuSkills;