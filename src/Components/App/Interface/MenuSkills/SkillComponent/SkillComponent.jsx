import './SkillComponent.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function SkillComponent() {

    const objectSkills = useSelector(state => state.skills);
    const arraySkills = objectSkills.character.skills;
    const arrayBasicParameters = objectSkills.character.basicParameters;
    const [pointsSkill, setPointsSkill] = useState(arraySkills);

    const skills = arraySkills.map((item) => {

        const upSkill = () => {
            if (item.point < 5) {
                setPointsSkill(item.point++);
            }
        }
        const checkBasicParameters = () => {
            if (item.id < 2) {
                if (arrayBasicParameters.id = 1) {
                    if (item.point < arrayBasicParameters[0].point) {
                        upSkill();
                    }
                }
            } else if (item.id < 4) {
                if (arrayBasicParameters.id = 2) {
                    if (item.point < arrayBasicParameters[1].point) {
                        upSkill();
                    }
                }
            } else if (item.id < 7) {
                if (arrayBasicParameters.id = 3) {
                    if (item.point < arrayBasicParameters[2].point) {
                        upSkill();
                    }
                }
            } else if (item.id > 6) {
                if (arrayBasicParameters.id = 4) {
                    if (item.point < arrayBasicParameters[3].point) {
                        upSkill();
                    }
                }
            }
        }

        const statusSkill = () => {
            switch (item.point) {
                case 0:
                    return 'Нетренированный'

                case 1:
                    return 'Новичок'

                case 2:
                    return 'Ученик'

                case 3:
                    return 'Адепт'

                case 4:
                    return 'Эксперт'

                case 5:
                    return 'Мастер'

                default:
                    return 'Нетренированный'
            }
        }

        const backgroundColorStatusSkill = () => {
            switch (item.point) {
                case 0:
                    return 'rgb(167, 91, 91)'

                case 1:
                    return 'rgb(151, 64, 64)'

                case 2:
                    return 'rgb(173, 59, 59)'

                case 3:
                    return 'rgb(167, 48, 48)'

                case 4:
                    return 'rgb(187, 43, 43)'

                case 5:
                    return 'rgb(212, 31, 31)'

                default:
                    return 'rgb(167, 91, 91)'
            }
        }


        return (
            <div className='skillComponent__content' key={item.id}>
                <div className='content__skills'>
                    <div className='content__skills-status' style={{ backgroundColor: backgroundColorStatusSkill() }}>
                        <span>{statusSkill()}</span>
                    </div>
                    <div className='content__skills-info'>
                        <span className='name'>
                            {item.skill}:
                        </span>

                        <span className='points'>
                            {item.point}/5
                        </span>
                    </div>
                </div>
                <div className='content__button' onClick={checkBasicParameters}>
                    <button>Тренировать</button>
                </div>
            </div>
        )
    });

    return (
        <div className="skillComponent__wrapper">
            {skills}
        </div>
    )
};
export default SkillComponent;