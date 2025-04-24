import "../styles/tizstyle.css"
import {useState} from "react";
import PropTypes from 'prop-types';

function Tabs({tabsContent, onChange}) {

    const [currentTab, setCurrentTab] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTab(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((item, index) => (
                        <div className={`tab-item ${currentTab === index ? 'active' : ''}`}
                             onClick={() => handleOnClick(index)}
                             key={item.label}><span
                            className="label">{item.label}</span></div>))
                }
            </div>
            <div className="content" style={{color: 'red'}}>
                {
                    tabsContent[currentTab] && tabsContent[currentTab].content
                }
            </div>
        </div>
    )
}

Tabs.propTypes = {
    tabsContent: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired
};

export default Tabs;