import ColorPalette from './ColorPalette';
import SearchBar from './SearchBar';
import './App.css'
import { useState } from 'react';


function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, SetIsDarkText] = useState(true)

  return (
      <section className='mainSection'>
        <ColorPalette
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />
        <SearchBar
          colorValue = {colorValue}
          setColorValue = {setColorValue}
          setHexValue = {setHexValue}
          isDarkText = {isDarkText}
          SetIsDarkText = {SetIsDarkText}
        /> 
      </section>
  )
}

export default App
