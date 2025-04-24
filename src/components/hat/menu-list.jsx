import MenuItem from "./menu-item";

function MenuList({list = []}){


//this component, get a array which has a lot of items, iterate through it and put every list item in an unordered list
return (<ul className="menu-list-container">
    {
        list && list.length ? list.map(listItem => <MenuItem item={listItem}/>) : null
    }
</ul>)

}

export default MenuList;