import PropTypes from 'prop-types';

function ModalPopup({id, header, body, footer}) {

    return (
        <div id={id || 'Modal'} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h3>{header ? header : 'Header'}</h3>
                </div>
                <div className="modal-body">
                    {body ? body : <div><p>This is our Modal so go and eat me!</p></div>}
                </div>
                <div className="modal-footer">
                    {footer ? footer : <div><p>0620... Bekapod megfullsz</p></div>}
                </div>
            </div>
        </div>

    )
}

ModalPopup.propTypes = {
    id: PropTypes.string,
    header: PropTypes.node,
    body: PropTypes.node,
    footer: PropTypes.node
};

export default ModalPopup;