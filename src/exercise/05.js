// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

const Box = ({ size, style, children }) => {
  return (
    <div
      className={`box box--${size}`}
      style={{
        ...style,
        fontStyle: 'italic'
      }}
    >
        {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box size='medium' style={{backgroundColor: 'pink'}} >medium pink box</Box>
      <Box size='large' style={{backgroundColor: 'orange'}} >large orange box</Box>
    </div>
  )
}

export default App
