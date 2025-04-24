import MenuList from "./menu-list";
import { useState } from "react";


function MenuItem({item}){
    //only one item

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    //usestate for the children which i want to display or no

    function handleToggleChildren(getCurrentlabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel] : !displayCurrentChildren[getCurrentlabel]
        }) //get the current label what is clicked then skip the current displayed children and get the opposite value for the display
    }

    console.log(displayCurrentChildren)

    return(
        <li>
            <div style={{display: 'flex', gap: '20px'}}>
                {/*this is the rendered item name*/}
            <p>{item.label}</p>
            {
                /*this checking if there is a children if there is then generate a span whats generate a + or -, if the display is on*/
                item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>{displayCurrentChildren[item.label] ? '-' : '+'}</span> : null
            }
            </div>
            {
                /*recursively generate the another children */
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children}/> : null 
            }
        </li>
    )
}

export default MenuItem;