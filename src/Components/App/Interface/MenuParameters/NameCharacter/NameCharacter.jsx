import './NameCharacter.scss';

function NameCharacter(props) {
    return (
        <>
            <div className="name_character name">
                <h3>
                    {props.name}
                </h3>
            </div>
        </>
    )
};
export default NameCharacter;