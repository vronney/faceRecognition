import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Logo></Logo>     
      {/* <ImageLinkForm></ImageLinkForm>
      <FaceRecognition></FaceRecognition> */}
    </div>
  );
}

export default App;
