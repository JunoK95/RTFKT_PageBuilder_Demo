import React, {useState, useContext} from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { TextField, Input, FormHelperText, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { CirclePicker } from 'react-color';
import { DataContext } from '../DataContext';
import EditPaletteItem from './EditPaletteItem';
import BasicOptions from './palette/BasicOptions';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';

function EditPalette(props) {
  const {open, setopen, selected, update, handleDelete} = props;
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
      <ListItem>
        <ListItemIcon><FormatShapesIcon fontSize={'large'} /></ListItemIcon>
        <ListItemText>RTFKT TEST</ListItemText>
      </ListItem>
      <EditPaletteItem 
        title={'Basic'} 
        content={
          <BasicOptions handleChange={handleChange} selected={selected} />
        }
      />
      <EditPaletteItem 
        title={'Background'} 
        content={
          <div style={styles.colorContainer}>
            <div style={styles.label}>Background Color</div>
            <CirclePicker 
              colors={
                ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", 'black', 'white', 'white', 'white', 'white', 'white']
              } 
              onChange={color => handleChange('backgroundColor', color.hex)} 
            />
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
              <CirclePicker 
                colors={
                  ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", 'black', 'white', 'white', 'white', 'white', 'white']
                }
                onChange={color => handleChange('color', color.hex)} />
            </div>
          </React.Fragment>
        }
      />
      <EditPaletteItem
        title={'Image'}
        content={
          <div style={styles.colorContainer}>
            <div style={styles.textFieldContainer}>
                <Input
                  value={context.data[selected].img} 
                  onChange={event => handleChange('img', event.target.value)}
                  label={'Image Url'}
                  inputProps={{
                    min: "1",
                  }}
                />
                <FormHelperText id="standard-weight-helper-text">Image URL</FormHelperText>
              </div>
          </div>
        }
      />
      <ListItem button onClick={() => {handleDelete(selected)}}>
        <ListItemText>DELETE</ListItemText>
      </ListItem>
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
