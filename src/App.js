import React, { useState } from 'react';
import './App.css';




function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");
  const [visibility, setVisibility] = useState(false);
  return (

    <div className="App">
    <div>
    <h1> Build a Hero </h1>
    <label> Name: </label>
    <input type="text" 
    style={{margin: 10}}
    onChange={(event) => {
    setName(event.target.value);
    }} 
    />


    <label> Age: </label>
    <input type="number" 
    style={{margin: 10}}
    onChange={(event) => {
    setAge(event.target.value);
    }}
    />


    <label> Height: </label>
    <input type="text" 
    style={{margin: 10}}
    onChange={(event) => {
    setHeight(event.target.value);
    }}
    />


    <label> SuperPower: </label>
    <input type="text" 
    style={{margin: 10}}
    onChange={(event) => {
      setSuperPower(event.target.value);
      }}
      />
    </div>

      <button onClick={() => {setVisibility(true);}}> Character Details </button>

      <div>
        <h1> Hero Info </h1>
      {visibility && (  
      <ul>
        <li><h3>Name: {name}</h3></li>
        <li><h3>Age: {age}</h3></li>
        <li> <h3>Height: {height}</h3></li>
        <li> <h3>Superpower: {superPower}</h3></li>
          </ul>
        )}

        </div>




      {/* <div>
        {visibility && (  <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{height}</li>
        <li>{superPower}</li>

      </ul> )}
     
      </div> */}

      
    </div>
  );
}

export default App;
