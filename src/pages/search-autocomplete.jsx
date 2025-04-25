import {useEffect, useState} from "react";
import Suggestion from "../components/suggestion.jsx";

function SearchAutocomplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const [show, setShow] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();


            if (data && data.users && data.users.length) {
                setUsers(data.users.map(user => user.username));
                setLoading(false);
            }

        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filteredData);
            setShow(true);
        } else {
            setShow(false);
        }
    }

    function handleClick(event) {

        setSearchParam(event.target.innerText);
        setShow(false);
        setFilteredUsers([])
    }

    useEffect(() => {
        fetchListOfUsers();
    }, [])


    if (loading) {
        return (<div>Loading Please Wait!</div>);
    }

    return (
        <>
            <div className="search-container">
                <input name="search-users" onChange={handleSearch} value={searchParam} placeholder="Search Users Here"
                       type="text"/>
            </div>
            <div className="search-results-container">
                {
                    show && <Suggestion handleClick={handleClick} data={filteredUsers}/>
                }
            </div>
        </>
    )
}

export default SearchAutocomplete;