import {useEffect, useState} from "react";


// eslint-disable-next-line react/prop-types
export default function ScrollIndicator({url}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();

            console.log(data);

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    function handleScrollPercent() {
        //console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercent(howMuchScrolled / height);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercent)

        return () => {
            window.removeEventListener('scroll', () => {
            })
        }
    }, [])

    if (loading) {
        return <div>The website is loading, please wait!</div>
    }

    console.log(scrollPercent);

    return (
        <div>
            <h1>Custom Scroll indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{width: `${scrollPercent}%`}}>

                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ? data.map((item) => <p key={item.id}>{item.title}</p>) : null
                }
            </div>
        </div>
    )
}
