import React, { useState } from 'react';
import { Collapse, ListItem } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';

function EditPaletteItem(props) {
  const {content, title} = props;
  const [open, setopen] = useState(false);

  return (
    <div>
      <ListItem button onClick={() => setopen(!open)}>
        {open ? <ExpandMore /> : <ChevronRight />}
        {title}
      </ListItem>
      <Collapse in={open}>
        {content}
      </Collapse>
    </div>
  )
}

export default EditPaletteItem
