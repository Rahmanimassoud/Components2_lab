// import { Route, Routes } from "react-router-dom";
import './App.css'
import Component1 from "./components/Component1/Component1";
import Component2 from "./components/component2/Component2";
import Component3 from "./components/Component3/Component3";
import Component4 from './components/Component4/Component4';
import Component5 from './components/Component5/Component5';
import Component6 from './components/Component6/Component6';
import Component9 from './components/Component9/Component9';

function App() {
  return (
    <div className="App">
      <div className="flex-row ">
        <h1>Level: Medium</h1>
        <img className="image" src="./assets/work1.jpg" alt="work" />
      </div>
      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 1</h1>
          <Component1/>
        </div>
        <div className="component-container blue">
          <h1>component 2</h1>
          <Component2/>
        </div>
        <div className="component-container green">
          <h1>component 3</h1>
          <Component3/>
        </div>
        <div className="component-container grey">
          <h1>component 4</h1>
          <Component4/>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex-row ">
        <h1>Level: Hard</h1>
        <img className="image" src="./assets/work2.jpg" alt="work" />
      </div>
      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 5</h1>
          <Component5/>
        </div>
        <div className="component-container blue">
          <h1>component 6</h1>
          <Component6/>
        </div>
        <div className="component-container green">
          <h1>component 7</h1>
          {/* put component7 RIGHT here */}
        </div>
        <div className="component-container grey">
          <h1>component 8</h1>
          {/* put component8 RIGHT here */}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex-row ">
        <h1>Level: Impossible</h1>
        <img className="image" src="./assets/work 3.jpg" alt="work" />
      </div>
      <div className="easy flex-row">
        <div className="component-container red">
          <h1>component 9</h1>
          <Component9/>
        </div>
        <div className="component-container blue">
          <h1>component 10</h1>
          {/* put component10 RIGHT here */}
        </div>
        <div className="component-container green">
          <h1>component 11</h1>
          {/* put component11 RIGHT here */}
        </div>
        <div className="component-container grey">
          <h1>component 12</h1>
          {/* put component12 RIGHT here */}
          {/* you might have to make this one it's own page or display JUST this one */}
        </div>
      </div>
    </div>
  );
}


export default App
