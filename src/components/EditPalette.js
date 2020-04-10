import React, {useState, useContext} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { TextField } from '@material-ui/core';
import { CirclePicker } from 'react-color';
import { DataContext } from '../DataContext';

function EditPalette(props) {
  const {open, setopen, selected} = props;
  const context = useContext(DataContext);
  const {text, color, backgroundColor} = context.data[selected];
  const [values, setvalues] = useState({
    text: text,
    color: color,
    backgroundColor: backgroundColor,
  });

  const toggleDrawer = open => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setopen(open);
  };

  const handleChange = (name, value) => {
    setvalues({
      ...values,
      [name]: value,
    })
    context.functions.changeValue(selected, name, value);
  }

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div style={styles.colorContainer}>
        <div style={styles.label}>Background Color</div>
        <CirclePicker onChange={color => handleChange('backgroundColor', color.hex)} />
      </div>
      <div style={styles.colorContainer}>
        <div style={styles.label}>Text Color</div>
        <CirclePicker onChange={color => handleChange('color', color.hex)} />
      </div>
      <div style={styles.colorContainer}>
      <div style={styles.label}>Text</div>
        <TextField value={context.data[selected].text} multiline onChange={event => handleChange('text', event.target.value)}/>
      </div>
    </SwipeableDrawer>
  )
}

export default EditPalette

const styles = {
  container: {
    postion: 'absolute',
    width: 300,
    height: 200,
    backgroundColor: '#ccc',
  },
  colorContainer: {
    padding: 24,
  },
  label: {
    fontSize: 14,
    padding: '12px 0',
    color: '#777',
  },
}
