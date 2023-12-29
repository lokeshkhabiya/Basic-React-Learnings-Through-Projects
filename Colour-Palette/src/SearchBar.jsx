/* eslint-disable react/prop-types */
// import React from 'react'
import colorNames from 'colornames'

const SearchBar = ({colorValue, setColorValue, setHexValue, isDarkText, SetIsDarkText}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
        autoFocus
        type="text"
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e)=>{
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
        />
        <button
            type="button"
            onClick={()=> SetIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default SearchBar