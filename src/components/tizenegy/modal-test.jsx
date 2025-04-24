import {useState} from "react";
import ModalPopup from "../../pages/modalpop.jsx";

//import TabTest from "../tiz/tab-test.jsx";


function ModalTest() {

    const [showModal, setShowModal] = useState(false)

    function handleToggleModalPopup() {
        setShowModal(!showModal)
    }

    return <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModal && <ModalPopup/>
        }
    </div>
}

export default ModalTest;