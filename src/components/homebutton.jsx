import { useNavigate } from "react-router";


function HomeButton(){
    const navigate = useNavigate()

    return <button onClick={() => navigate('/')}>Back</button>
}

export default HomeButton