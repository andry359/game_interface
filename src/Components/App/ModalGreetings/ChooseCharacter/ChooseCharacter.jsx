import './ChooseCharacter.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Male } from './icons/male.svg';
import { ReactComponent as Woman } from './icons/woman.svg';

function ChooseCharacter() {

    const objectInfo = JSON.parse(localStorage.getItem('characterInfo'));

    return (
        <div className='main__content main-content'>
            <div className='main-content__text'>
                <p>У Вас уже есть готовый персонаж. Хотите продолжить готовым персонажем или создать нового?</p>
            </div>
            <div className="main-content__buttons">
                <Link to='/Interface/*'>
                    <div className="main-content__button-old">
                        <div className="old__character">
                            <div className="old__character-icon">
                                {objectInfo.gender === 'man' ?
                                    <Male width='70' height='80' /> :
                                    <Woman width='70' height='80' />}
                            </div>
                            <div className="old__character-name">
                                <h3>
                                    {objectInfo.name}
                                </h3>
                            </div>
                        </div>
                        <div className="main-content__button-title">
                            <h4>
                                Продолжить уже созданным персонажем
                            </h4>
                        </div>
                    </div>
                </Link>
                <div className='main-content__button-new'>
                    <Link to='characterCreation'>
                        <button type='submit'>
                            Создать нового персонажа
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
};
export default ChooseCharacter;