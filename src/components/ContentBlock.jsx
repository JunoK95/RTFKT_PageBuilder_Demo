import React from 'react';

function ContentBlock(props) {
  const {item, position, setopen, setselected} = props;
  const {width,
    height,
    pos_x,
    pos_y,
    color,
    fontSize,
    backgroundColor,
    zIndex,
    img} = item;

  const handleClick = () => {
    setopen(true);
    setselected(position);
  }
  
  return (
    <div 
      style={
        {
          ...styles.container, 
          width: parseInt(width, 10),
          height: parseInt(height, 10),
          left: parseInt(pos_x, 10),
          top: parseInt(pos_y, 10),
          color,
          fontSize: parseInt(fontSize),
          zIndex,
          backgroundColor
        }
      } 
      onClick={handleClick}>
      <div style={{...styles.textBox, color: color}}>{item.text}</div>
      {(img && img !== '') && <img style={{width: '100%', height: 'auto'}} src={img} alt={''} />}
    </div>
  )
}

const styles = {
  container: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCorner: {
    position: 'absolute',
    right: '20px',
  },
  textBox: {
    textAlign: 'center',
    verticalAlign: 'center',
  },
}

export default ContentBlock
