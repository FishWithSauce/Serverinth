import './App.css'
import Nav from './components/Nav';
import Header from './components/Header';
import View from './components/View';
import { useState } from 'react';

function App() {
  const [creatorToggled, setToggle] = useState(1);

  return ( //0 or 1 to declare wether creator is active
    <>
      <Nav />
      <Header/>
      <View mode={1} toggleCreator={creatorToggled}/>
    </>
  )
}

export default App
