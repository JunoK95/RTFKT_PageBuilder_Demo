import React, { useContext } from 'react'
import { FormHelperText, Input, InputAdornment } from '@material-ui/core'
import { DataContext } from '../../DataContext';

function BasicOptions(props) {
  const context = useContext(DataContext);
  const {handleChange, selected} = props;

  return (
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
      <div style={styles.colorContainer}>
        <div style={styles.textFieldContainer}>
          <Input
            value={context.data[selected].zIndex} 
            onChange={event => handleChange('zIndex', event.target.value)}
            startAdornment={<InputAdornment position='start'>z: </InputAdornment>}
            endAdornment={<InputAdornment position="end">index</InputAdornment>}
            type={'number'}
            inputProps={{
              min: "1",
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Z-Index</FormHelperText>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BasicOptions


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