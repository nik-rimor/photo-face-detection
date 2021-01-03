import React from 'react'
import Navigiation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

function App() {
  return (
    <div className="App">
      <Navigiation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
      <FaceDetection />
      */}
    </div>
  );
}

export default App;
