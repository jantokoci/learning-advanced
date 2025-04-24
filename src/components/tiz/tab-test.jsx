import Tabs from '../../pages/tabs.jsx';
import Home from "../../pages/home.jsx";

function RandomComponent() {
    return <h1>SOME RANDOM CONTENT</h1>
}

function TabTest() {

    const tabs = [
        {
            label: 'Tab1',
            content: <p>Heló Wörld</p>
        },
        {
            label: 'Tab2',
            content: <Home/>
        },
        {
            label: 'Tab3',
            content: <RandomComponent/>
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default TabTest;