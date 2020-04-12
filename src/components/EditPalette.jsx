import React, {useState, useContext} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { TextField, InputAdornment, Input, FormHelperText, Collapse, Button, ListItem, ListItemText } from '@material-ui/core';
import { CirclePicker } from 'react-color';
import { DataContext } from '../DataContext';
import EditPaletteItem from './EditPaletteItem';

function EditPalette(props) {
  const {open, setopen, selected, update} = props;
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
    update();
  }

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <EditPaletteItem 
        title={'Basic'} 
        content={
          <React.Fragment>
            <div style={styles.colorContainer}>
              <div style={styles.label}>Position</div>
              <div style={styles.textFieldContainer}>
                <Input
                  value={context.data[selected].pos_x} 
                  onChange={event => handleChange('pos_x', event.target.value)}
                  startAdornment={<InputAdornment position='start'>x: </InputAdornment>}
                  endAdornment={<InputAdornment position="end">px</InputAdornment>}
                  type={'number'}
                  inputProps={{
                    min: "0",
                  }}
                  label={'width'}
                />
                <FormHelperText id="standard-weight-helper-text">Horizontal</FormHelperText>
              </div>
              <div style={styles.textFieldContainer}>
                <Input
                  value={context.data[selected].pos_y} 
                  onChange={event => handleChange('pos_y', event.target.value)}
                  startAdornment={<InputAdornment position='start'>y: </InputAdornment>}
                  endAdornment={<InputAdornment position="end">px</InputAdornment>}
                  type={'number'}
                  inputProps={{
                    min: "0",
                  }}
                  label={'height'}
                />
                <FormHelperText id="standard-weight-helper-text">Vertical</FormHelperText>
              </div>
            </div>
            <div style={styles.colorContainer}>
              <div style={styles.label}>Size</div>
              <div style={styles.textFieldContainer}>
                <Input
                  value={context.data[selected].width} 
                  onChange={event => handleChange('width', event.target.value)}
                  startAdornment={<InputAdornment position='start'>w: </InputAdornment>}
                  endAdornment={<InputAdornment position="end">px</InputAdornment>}
                  type={'number'}
                  inputProps={{
                    min: "1",
                  }}
                  label={'width'}
                />
                <FormHelperText id="standard-weight-helper-text">Width</FormHelperText>
              </div>
              <div style={styles.textFieldContainer}>
                <Input
                  value={context.data[selected].height} 
                  onChange={event => handleChange('height', event.target.value)}
                  startAdornment={<InputAdornment position='start'>h: </InputAdornment>}
                  endAdornment={<InputAdornment position="end">px</InputAdornment>}
                  type={'number'}
                  inputProps={{
                    min: "1",
                  }}
                  label={'height'}
                />
                <FormHelperText id="standard-weight-helper-text">Height</FormHelperText>
              </div>
            </div>
          </React.Fragment>
          } 
      />
      <EditPaletteItem 
        title={'Background'} 
        content={
          <div style={styles.colorContainer}>
            <div style={styles.label}>Background Color</div>
            <CirclePicker onChange={color => handleChange('backgroundColor', color.hex)} />
          </div>
        } 
      />
      <EditPaletteItem 
        title={'Text'}
        content={ 
          <React.Fragment>
            <div style={styles.colorContainer}>
              <div style={styles.label}>Text</div>
              <TextField value={context.data[selected].text} multiline fullWidth onChange={event => handleChange('text', event.target.value)}/>
            </div>
            <div style={styles.colorContainer}>
              <div style={styles.textFieldContainer}>
                <Input
                  value={context.data[selected].fontSize} 
                  onChange={event => handleChange('fontSize', event.target.value)}
                  type={'number'}
                  label={'fontSize'}
                  inputProps={{
                    min: "1",
                  }}
                />
                <FormHelperText id="standard-weight-helper-text">Font Size</FormHelperText>
              </div>
            </div>
            <div style={styles.colorContainer}>
              <div style={styles.label}>Text Color</div>
              <CirclePicker onChange={color => handleChange('color', color.hex)} />
            </div>
          </React.Fragment>
        }
      />
      <EditPaletteItem
        title={'Other'}
        content={
          <div style={styles.colorContainer}>
            <ListItem button onClick={() => {}}>
              <ListItemText>DELETE</ListItemText>
            </ListItem>
          </div>
        }
      />
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
  textFieldContainer: {
    padding: '12px 0',
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
