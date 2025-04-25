import PropTypes from 'prop-types';

export default function Suggestion({data, handleClick}) {

    return <ul>
        {
            data && data.length ? data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>) : null
        }
    </ul>
}

Suggestion.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    handleClick: PropTypes.func.isRequired
};