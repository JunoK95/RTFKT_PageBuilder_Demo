import React, { useState } from 'react'
import { DataContext } from '../DataContext'
import ContentBlock from '../components/ContentBlock'
import EditPalette from '../components/EditPalette'

const EditPage = props => {
  const [EditOpen, setEditOpen] = useState(false);
  const [selected, setselected] = useState(0);

  return (
    <DataContext.Consumer>
      {context => {
        const {data} = context;
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
            <EditPalette open={EditOpen} setopen={setEditOpen} selected={selected} />
          </React.Fragment>
        )
      }}
    </DataContext.Consumer>
  )
}

export default EditPage
