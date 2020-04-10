import React, { createContext, useState } from 'react';

export const DataContext = createContext();

function DataContextProvider(props) {
  const [data, setdata] = useState([
    {
      type: 'text',
      text: "What's Up World",
      content: <div>What's Up World</div>,
      color: '#fff',
      backgroundColor: '#11a4ff',
    },
    {
      type: 'text',
      text: "What's Up World",
      content: <div>What's Up World</div>,
      color: '#ccc',
      backgroundColor: '#777',
    },
  ]);

  const addBlock = (type, content, xpos, ypos, xsize, ysize) => {
    const newBlockData = {
      type, 
      content, 
      xpos, 
      ypos, 
      xsize, 
      ysize,
    }
    setdata({...data, newBlockData});
  };

  const changeValue = (position, name, value) => {
    let newValue = data;
    newValue[position] = {...newValue[position], [name]: value}
    console.log('Change Value', newValue);
    setdata(newValue);
  }

  return (
    <DataContext.Provider
      value={{
        data,
        functions: {
          addBlock,
          changeValue,
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;
