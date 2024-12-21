import { useState } from "react";
//importing the data dictionary that we use
import data from "../components/dataegy";
import "../styles/egystyle.css";
import HomeButton from "../components/homebutton";
//Accordian = elemek fuggoleges listaja (single selection, and multiple selection)

function Accordian() {
  // Which one get chosen
  const [selected, setSelected] = useState(null);
  // Enables the multi selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  // Handling the multiselection
  const [multiple, setMultiple] = useState([]);

  // Watches if the current id is selected if yes it closes if not its get selected
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Makes an array which watches the elements get selected by the index
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  console.log(selected, multiple, enableMultiSelection);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="Accordian">
        {/*Handling error if the data is can not find, mapping the data, and make the answer appear, handling the enabling button for the function change*/}
        {data && data.lenght > 0 ? (
          <div>No data Found!</div>
        ) : (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/*Making able to see the data*/}
              {/*selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null*/}
            </div>
          ))
        )}
        <HomeButton />
      </div>
    </div>
  );
}

export default Accordian;
