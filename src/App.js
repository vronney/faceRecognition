import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}          
      />
      <Navigation></Navigation>
      <Logo></Logo>
      <Rank></Rank>     
      <ImageLinkForm></ImageLinkForm>
      { /*<FaceRecognition></FaceRecognition> */}
    </div>
  );
}

export default App;
