import { useNavigate } from "react-router";

function Home(){
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>Learning More Shi..</h1>
            </div>
            <div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button>0</button></a>
                <button onClick={() => navigate('egy')}>Accordian</button>
                <button onClick={() => navigate('ketto')}>Random Color Generator</button>
                <button onClick={() => navigate('harom')}>Star Rating Component</button>
                <button onClick={() => navigate('negy')}>Image Slider</button>
                <button onClick={() => navigate('ot')}>Load More Components</button>
                <button onClick={() => navigate('hat')}>TreeView</button>
                <button onClick={() => navigate('het')}>QR Code Generator</button>
            </div>
        </>
    );
}

export default Home;