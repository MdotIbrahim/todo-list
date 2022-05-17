import React, {useState} from "react";
import './main.css';
// import { ImBin } from 'react-icons/fa';

const App = () => {
    
    const [allHeroes, setAllHeroes] = useState([
        {
            hero : "superman",
            villain: "lex luthor",
        },
        {
            hero : "Saitama",
            villain: "lex luthor2",
        },
    ])

    const [inputText, setInputText] = useState("")
    const changeHandler = (event) => {
      setInputText(event.target.value)
    }
    const [archive, setArchive] = useState("")
    // const [toDos, setToDos] = useState([])
    // const addToDo = () => {
    //   setToDo(inputText)
    // }
    const [toDos, setToDos] = useState([]);

    const addHandler = () => {
      let newtoDoArray = [...toDos];
      newtoDoArray.push(inputText);
      setToDos(newtoDoArray)
      // setInputText("")
    };

    const removeHandler = (index) => {
      let newtoDoArray = [...toDos];
      newtoDoArray.splice(index, 1);
      setToDos(newtoDoArray)
    };
    const [strike, SetStrike] = useState("none")
    // const [show, SetShow] = useState(0)
    const tickHandler = (index) => { //TODO this button will use class name manipulation via function within classname to strike through p text
      // let newtoDoArray = [...toDos];
      // newtoDoArray.splice(index, 1);
      // setToDos(newtoDoArray)
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
        setArchive(archive + `\n ${toDos[index]}`)
      }else{

      }
    }

    return (
        <>
            <div id="myDIV" className="header">
              <h1>To-Do List</h1>
              <h2>{inputText}</h2>
              <input type="text" onChange={changeHandler}/>
              <button className ="addBtn"  onClick={addHandler}>+</button> {/* onClick={()=>{addToDo()}} */}
              <div>
                {toDos.map((toDo, index) => {
                    return (
                    <div key={index}>
                      <p className={strike} onClick={tickHandler}>{toDo}</p>
                      {show && <p className="strike">Villain: {}</p>} {/* if show is false then it wont even read the p tag therefore not rendering it */}
                      <button className ="tick-btn" onClick={handleToggle}>{show ? "Hide Villain": "Show Villain"}</button>
                      <button className="arc-btn"onClick={()=>{handleArchive(index)}}>Add to archives</button>

                      <ToDoItem key ={index} toDoString={toDo} archive={archive} addToarchive = {setArchive}/>
                      <button className ="tick-btn" onClick={()=>{tickHandler(index)}}>Done ✓</button>
                      <button className ="remove-btn" onClick={()=>{removeHandler(index)}}>Remove ✖</button>
                      
                      
                    </div>
        
              )})}
              <h3>{archive}</h3>

            </div>
              {/* <div className="todo-list">{toDos}</div> */}
            </div>
            
        </>
    )

}

const ToDoItem = (props) => {
    const [show, setShow] = useState(false)

    const handleToggle = () => {
        setShow(!show)
    }

    const handleArchive = () => {
      if (!(props.archive.includes(`${props.toDoString}`)) ) {
        props.addToarchive(props.archive + `\n ${props.toDoString}`)
      }else{

      }
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
            <p>Hero: {props.toDoString}</p>
            {show && <p className="strike">Villain: {props.toDoString}</p>} {/* if show is false then it wont even read the p tag therefore not rendering it */}
            <button className ="tick-btn" onClick={handleToggle}>{show ? "Hide Villain": "Show Villain"}</button>
            <button className="arc-btn"onClick={handleArchive}>Add to archives</button>
            {/* <button onClick={handleRemToarchives}>Remove from archives</button> */}
        </div>
    )
}

const complete = (props) => {

}



export default App;