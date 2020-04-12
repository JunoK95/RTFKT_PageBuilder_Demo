import React, { useState, useContext, useCallback } from 'react';
import { DataContext } from '../DataContext';
import ContentBlock from '../components/ContentBlock.jsx';
import EditPalette from '../components/EditPalette.jsx';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const EditPage = props => {
  const [EditOpen, setEditOpen] = useState(false);
  const [selected, setselected] = useState(0);
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const context = useContext(DataContext);
  const {data, functions} = context;

  const handleAdd = () => {
    functions.addBlock();
    setselected(data.length - 1);
  }

  const content = data.map((item, i) => {
    console.log(item)
    return (
      <ContentBlock 
        key={i} 
        position={i} 
        item={item} 
        setopen={setEditOpen}
        setselected={setselected}
      />
    )
  })
        
  return (
    <React.Fragment>
      {content}
      <EditPalette open={EditOpen} setopen={setEditOpen} selected={selected} update={forceUpdate} />
      <IconButton style={styles.addButton} aria-label="delete" onClick={handleAdd}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  )
}

const styles = {
  addButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 48,
  }
}

export default EditPage
