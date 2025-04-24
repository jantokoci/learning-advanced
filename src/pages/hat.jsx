import '../styles/hatstyles.css'
import MenuList from '../components/hat/menu-list';

function TreeView({manus = []}){

//This assignment was good for see what is a structure for a recursive menubar


//this only calls the menu list, that we passed for in the app.jsx, there is another example
    return(
        <div className='tree-view-container'>
            <MenuList list={manus} />
        </div>
    )
}

export default TreeView;