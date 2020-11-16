import React from 'react'
import ReactDOM from 'react-dom'
import TabsComponent from './Tabs'
import Accordion from './Accordion'
import CharacterDropDown from './Dropdown'
import './App.css';


const App = () => {
  return (
    <div>
      <div className="first-section"></div>
      <div className="header">
        <div className="container">
        <span className="text1"> Mario Game</span>
         <span className="text2">
          is released!
        </span>
     </div>
        <img className="" alt="banner image" src="https://cdn.suwalls.com/wallpapers/games/new-super-luigi-u-21609-2560x1440.jpg" />
      </div>
      
      <TabsComponent></TabsComponent>
      <div className="wrapper">
        <h4 className="accordion-header">Who are the characters?</h4>
        <Accordion></Accordion>
        <h4 className="dropdown-header">Other Characters</h4>
        <CharacterDropDown></CharacterDropDown>
      </div>
    </div>

 
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
