import React, { createContext, useState } from 'react';

export const DataContext = createContext();

function DataContextProvider(props) {
  const [data, setdata] = useState([
    {
      type: 'text',
      text: "What's Up World",
      width: 300,
      height: 200,
      pos_x: 100,
      pos_y: 150,
      color: '#fff',
      fontSize: 14,
      backgroundColor: '#11a4ff',
      zIndex: 0
    },
    {
      type: 'text',
      text: "What's Up World 2",
      width: 300,
      height: 200,
      pos_x: 200,
      pos_y: 150,
      color: '#fff',
      fontSize: 14,
      backgroundColor: '#11a4ff',
      zIndex: 0
    },
  ]);

  const addBlock = () => {
    const defaultBlock = {
      type: 'text',
      text: 'text',
      width: 300,
      height: 200,
      pos_x: 0,
      pos_y: 0,
      color: '#000',
      fontSize: 14,
      backgroundColor: '#fff',
      zIndex: 0
    }

    const dataCopy = data;
    dataCopy.push(defaultBlock);
    console.log('DataCopy', dataCopy)
    
    setdata(dataCopy);
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
        setdata,
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
