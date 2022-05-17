import React, {useState} from "react";
import './main.css';

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

    const [favourite, setFavourite] = useState("")

    const [inputText, setInputText] = useState("")
    const changeHandler = (event) => {
      setInputText(event.target.value)
    }
    const [toDo, setToDo] = useState([])
    // const addToDo = () => {
    //   setToDo(inputText)
    // }
    const [Numbers, setNumbers] = useState([]);

    const addHandler = () => {
      let storedNums = [...Numbers];
      storedNums.push(inputText);
      setNumbers(storedNums)
      // setInputText("")
    };

    const removeHandler = (index) => {
      let storedNums = [...Numbers];
      storedNums.splice(index, 1);
      setNumbers(storedNums)
    };
    const [strike, SetStrike] = useState("none")
    const tickHandler = (index) => { //TODO this button will use class name manipulation via function within classname to strike through p text
      // let storedNums = [...Numbers];
      // storedNums.splice(index, 1);
      // setNumbers(storedNums)
      if (strike == "none"){
        SetStrike("strike")
      }else {
        SetStrike("none")
      }
      
      // setNumbers(Numbers[index].style = "text-decoration:line-through;")
      // onClick={()=>{tickHandler(index)}}
    }


    return (
        <>
            <div id="myDIV" className="header">
              <h1>To-Do List</h1>
              <h2>{inputText}</h2>
              <input type="text" onChange={changeHandler}/>
              <button className ="addBtn"  onClick={addHandler}>+</button> {/* onClick={()=>{addToDo()}} */}
              <div>
                {Numbers.map((number, index) => {
                    return (
                    <div key={index}>
                      <p className={strike} onClick={tickHandler}>{number}</p>
                      <button className ="tick-btn" onClick={()=>{tickHandler(index)}}>Done ✓</button>
                      <button className ="remove-btn" onClick={()=>{removeHandler(index)}}>Remove ✖</button>
                      
                    </div>
                    
              )})}
              

            </div>
              <div className="todo-list">{toDo}</div>
            </div>
            <h1>Hero Information</h1>
            <h3>{favourite}</h3>
            {allHeroes.map((heroInfo, index) => {
                return <HeroCard key ={index} heroInfoObject={heroInfo} fav={favourite} addToFav = {setFavourite}/> // heroCard is the functional component
            })}
            

        </>
    )

}

const HeroCard = (props) => {
    const [show, setShow] = useState(false)

    const handleToggle = () => {
        setShow(!show)
    }

    const handleAddToFavourites = () => {
      if (!(props.fav.includes(`${props.heroInfoObject.hero}`)) ) {
        props.addToFav(props.fav + ` ${props.heroInfoObject.hero}`)
      }
    }

    // const handleRemToFavourites = () => {
    //     for (let i = 0; i < props.heroInfoObject.length - 1; i++){
    //       if (props.heroInfoObject.hero[i] === `${props.heroInfoObject.hero}`){
    //         props.heroInfoObject.hero[i] === ""
    //       }
    //     }
    //     // props.addToFav(props.fav.delete(`${props.heroInfoObject.hero}`))
    //   }
    

    return (
        <div>
            <p>Hero: {props.heroInfoObject.hero}</p>
            {show && <p>Villain: {props.heroInfoObject.villain}</p>} {/* if show is false then it wont even read the p tag therefore not rendering it */}
            <button onClick={handleToggle}>{show ? "Hide Villain": "Show Villain"}</button>
            <button onClick={handleAddToFavourites}>Add to Favourites</button>
            {/* <button onClick={handleRemToFavourites}>Remove from Favourites</button> */}
        </div>
    )
}

const complete = (props) => {
  
}



export default App;