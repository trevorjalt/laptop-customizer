import React from 'react';
import Specs from './Specs';
import './App.css';


function MainFeatures(props) {
  
  return (
    <form className="main__form">
    <h2>Customize your laptop</h2>
    <Specs
          features={props.features}
          selected={props.selected}
          updateFeature={props.updateFeature}
        />
    </form>

  )   
}
            

export default MainFeatures

