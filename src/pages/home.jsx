import {useNavigate} from "react-router";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>Learning More Shi..</h1>
            </div>
            <div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <button>0</button>
                </a>
                <button onClick={() => navigate('egy')}>Accordian</button>
                <button onClick={() => navigate('ketto')}>Random Color Generator</button>
                <button onClick={() => navigate('harom')}>Star Rating Component</button>
                <button onClick={() => navigate('negy')}>Image Slider</button>
                <button onClick={() => navigate('ot')}>Load More Component</button>
                <button onClick={() => navigate('hat')}>Tree View/Menu UI</button>
                <button onClick={() => navigate('het')}>QR Code Generator</button>
                <button onClick={() => navigate('nyolc')}>Theme Switch</button>
                <button onClick={() => navigate('kilenc')}>Scroll Indicator</button>
                <button onClick={() => navigate('tizmiafa')}>Tabs</button>
                <button onClick={() => navigate('11')}>ModalPopup</button>
                <button onClick={() => navigate('12')}>Search Autocomplete</button>
            </div>
        </>
    );
}

export default Home;