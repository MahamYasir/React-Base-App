import React from 'react';
import './Hello.css';


function Hello() {

return <div className="Hellodiv">
          <h2>UNORDERED LIST</h2>
          <ul type="disc">
        <li>This is first item of my unordered list</li>
        <li>This is second item of my unordered list</li>
        <ul type="circle">
            <li>Another one</li>
            <li>Another two</li>
            <li>Another three</li>
        </ul>
        <li>This is third item of my unordered list</li>
    </ul>
    <h2>ORDERED LIST</h2>
    <ol type="I">
        <li>This is first item of my ordered list </li>
        <li>This is second item of my ordered list</li>
        <ol type="i">
            <li>Another one</li>
            <li>Another two</li>
            <li>Another three</li>
        </ol>
        <li>This is third item of my ordered list</li>
    </ol>
</div>
}

export default Hello;