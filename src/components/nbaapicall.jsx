/*import {useEffect, useState} from 'react';

function NbaApiCall() {
    const [leagueData, setLeagueData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNbaData = async () => {
            const url = 'https://api-nba-v1.p.rapidapi.com/leagues/';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '', // Store API key in environment variable
                    'x-rapidapi-host': ''
                }
            };

            try {
                setLoading(true);
                const response = await fetch(url, options);
                const result = await response.json(); // Using json() instead of text() for structured data
                setLeagueData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch NBA data');
                setLoading(false);
            }
        };

        fetchNbaData();
    }, []);

    if (loading) return <div>Loading NBA data...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>NBA Leagues</h2>
            {leagueData && (
                <pre>{JSON.stringify(leagueData, null, 2)}</pre>
            )}
        </div>
    );
}

export default NbaApiCall;*/