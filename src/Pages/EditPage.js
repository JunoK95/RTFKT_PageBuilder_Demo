import React, { useState, useContext, useCallback, useEffect } from 'react';
import { DataContext } from '../DataContext';
import ContentBlock from '../components/ContentBlock.jsx';
import EditPalette from '../components/EditPalette.jsx';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveMenu from '../components/SaveMenu';

const EditPage = props => {
  const [EditOpen, setEditOpen] = useState(false);
  const [selected, setselected] = useState(0);
  const [fetching, setfetching] = useState(false);
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const context = useContext(DataContext);
  const {data, functions} = context;
  const {id} = props.match.params;

  useEffect(() => {
    setfetching(true);
    const fetchData = async () => {
      console.log(id);
      await functions.initializeData(id);
      setfetching(false);
    }
    fetchData();
  }, [])

  const handleAdd = () => {
    functions.addBlock();
    setselected(data.length - 1);
    forceUpdate();
  }

  const handleDelete = () => {
    setEditOpen(false);
    functions.deleteBlock(selected);
    setselected(0);
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
  
  if (fetching) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <React.Fragment>
      {content.length > 0 &&
        <React.Fragment>
          {content}
          <EditPalette open={EditOpen} setopen={setEditOpen} selected={selected} update={forceUpdate} handleDelete={handleDelete} page_id={id} />
        </React.Fragment>
      }
      <div style={styles.addButton}>
        <SaveMenu id={id} selected={selected} />
        <IconButton aria-label="delete" onClick={handleAdd}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </div>
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
