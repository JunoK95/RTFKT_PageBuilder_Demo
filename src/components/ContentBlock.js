import React, { useState } from 'react'

function ContentBlock(props) {
  const {item, position, setopen, setselected} = props;

  const handleClick = () => {
    setopen(true);
    setselected(position);
  }
  
  return (
    <React.Fragment>
      <div style={{...styles.container, backgroundColor: item.backgroundColor}} onClick={handleClick}>
        <div>{item.text}</div>
      </div>
    </React.Fragment>
  )
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCorner: {
    position: 'absolute',
    right: '20px',
  },
}

export default ContentBlock
