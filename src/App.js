import React, {useState} from "react";
import './main.css';
// import { ImBin } from 'react-icons/fa';

const App = () => {
    const [inputText, setInputText] = useState("")
    const changeHandler = (event) => {
      setInputText(event.target.value)
    }

    const [toDos, setToDos] = useState([]);
    const [archive, setArchive] = useState([])

    const addHandler = () => {
      let newtoDoArray = [...toDos];
      newtoDoArray.push(inputText);
      setToDos(newtoDoArray)
      setInputText("")
    };

    const removeHandler = (index) => {
      let newtoDoArray = [...toDos];
      newtoDoArray.splice(index, 1);
      setToDos(newtoDoArray)
    };
    const [strike, SetStrike] = useState("none")
    // const [show, SetShow] = useState(0)
    const tickHandler = (index) => { //TODO this button will use class name manipulation via function within classname to strike through p text
      if (strike == "none"){
        SetStrike("strike")
      }else {
        SetStrike("none")
      }
      
      // setToDos(toDos[index].style = "text-decoration:line-through;")
      // onClick={()=>{tickHandler(index)}}
    }
    const [show, setShow] = useState(false)

    const handleToggle = () => {
        setShow(!show)
    }

    const handleArchive = (index) => {
      if (!(archive.includes(`${toDos[index]}`)) ) {
        setArchive(archive + `\r${toDos[index]}`)
      }else{
      }
    }

    return (
        <>
            <div className="header">

              <h1>To-Do List</h1>
              {/* <h2>{inputText}</h2> */}
              <input type="text" onChange={changeHandler}/>

              <button className ="addBtn" onClick={addHandler}>+</button>
              <h3>Archive List</h3>
              <h3>{archive}</h3> {/* use li */}
              
              <div>
                {toDos.map((toDo, index) => {
                    return (
                    <div key={index}>
                      <p className={strike} onClick={tickHandler}>{toDo}</p>
                      <ToDoItem key ={index} toDoString={toDo} addToarchive = {setArchive}/>
                      {/* <button className ="tick-btn" onClick={()=>{tickHandler(index)}}>Done ✓</button> */}
                      <button className ="remove-btn" onClick={()=>{removeHandler(index)}}>Remove ✖</button>
                      <button className="arc-btn"onClick={()=>{handleArchive(index)}}>Add to archives</button>
                      
                    </div>
              )})}
              </div>

            </div>
        </>
    )

}

const ToDoItem = (props) => {
    const [show, setShow] = useState(true)

    const handleToggle = () => {
        setShow(!show)
    }



    // const handleRemToarchives = () => {
    //     for (let i = 0; i < props.toDoString.length - 1; i++){
    //       if (props.toDoString.hero[i] === `${props.toDoString.hero}`){
    //         props.toDoString.hero[i] === ""
    //       }
    //     }
    //     // props.addToarchive(props.archive.delete(`${props.toDoString.hero}`))
    //   }
    

    return (
        <div>
            {/* <p>Hero: {props.toDoString}</p> */}
            {show && <p>Props-version: {props.toDoString}</p>} {/* if show is false then it wont even read the p tag therefore not rendering it */}
            <button className ="tick-btn" onClick={handleToggle}>{show ? "Complete Task" : "Undo Task" }</button>
            {/* <button onClick={handleRemToarchives}>Remove from archives</button> */}
        </div>
    )
}

const complete = (props) => {

}



export default App;