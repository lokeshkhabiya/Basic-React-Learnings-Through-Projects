/* eslint-disable react/prop-types */

const ColorPalette = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section 
    className="colorBox"
    style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#fff',
    }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

ColorPalette.defaultProps = {
    colorValue: "Empty Color Value"
}

export default ColorPalette