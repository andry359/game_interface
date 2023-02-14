import './NewCharacter.scss';
import { Link } from 'react-router-dom';

function NewCharacter() {

    return (
        <div className='main__content main-content'>
            <div className='main-content__text'>
                <p>Приветствую путник! Кажется настал час создать своего героя</p>
            </div>
            <div className='main-content__button'>
                <Link to='characterCreation'>
                    <button type='submit'>
                        Создать персонажа
                    </button>
                </Link>
            </div>
        </div>
    )
};
export default NewCharacter;