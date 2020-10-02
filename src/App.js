import React from 'react';
import './App.css';
import Hello from './Hello.js';


function App({name,age}) {

return <div>
        Hello <strong>{name}</strong>!
        <br/> 
        Age={age} 
        <Hello></Hello> 
        </div> 

}

export default App;
