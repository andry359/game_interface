import './MinorParametersInfo.scss';
import { useSelector } from 'react-redux';

function MinorParametersInfo() {

    const objectInfo = useSelector(state => state.points);
    const arrayMinorParameters = objectInfo.character.minorParameters;
    const arrayBasicParameters = objectInfo.character.basicParameters;

    function getMinorParameters(basicParameters, minorPoints) {
        const resultMinorParameters = [
            { id: 1, parameters: 'Жизненная сила', point: minorPoints[0] + basicParameters[0].point },
            { id: 2, parameters: 'Уклонение', point: minorPoints[1] + basicParameters[1].point },
            { id: 3, parameters: 'Энергичность', point: basicParameters[1].point + basicParameters[2].point },
        ];
        return resultMinorParameters;
    };

    const minorPoints = [... new Set(arrayMinorParameters.map(item => item.point))];
    const resultMinorParameters = getMinorParameters(arrayBasicParameters, minorPoints);

    const parameters = resultMinorParameters.map((item) => {

        return (
            <div className='minorParametersContent' key={item.id}>
                <span className='parameters__name'>
                    {item.parameters}:
                </span>
                <span className='points'>
                    {item.point}
                </span>
            </div>
        )
    });

    return (
        <>
            {parameters}
        </>
    )
};
export default MinorParametersInfo;