import './ParametersInfo.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function ParametersInfo(props) {

    const objectInfo = useSelector(state => state.points);
    const arrayBasicParameters = objectInfo.character.basicParameters;
    const [points, setPoints] = useState(arrayBasicParameters);

    const parameters = arrayBasicParameters.map((item) => {

        function addPoints() {
            if (item.point < 10) {
                if (props.basePoints > 0) {
                    setPoints(item.point++);
                    props.deleteBasePoints();
                }
            }
        }
        function deletePoints() {
            if (item.point > 0) {
                setPoints(item.point--);
                props.addBasePoints();
            }
        }

        return (
            <div className="parameters__content" key={item.id}>
                <div className="block__info">
                    <span className='parameters__name'>
                        {item.parameters}:
                    </span>
                    <span className='points'>
                        {item.point}
                    </span>
                </div>
                <div className="block__bar bar">
                    <div className='bar__button' onClick={deletePoints}>
                        <a href="#">-</a>
                    </div>
                    <div className='bar'>
                        <span style={{ width: `${item.point * 10}%` }}></span>
                    </div>
                    <div className='bar__button' onClick={addPoints}>
                        <a href="#">+</a>
                    </div>
                </div>
            </div >
        )
    });

    return (
        <>
            {parameters}
        </>
    )
};
export default ParametersInfo;