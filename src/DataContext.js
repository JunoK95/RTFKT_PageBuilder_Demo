import React, { createContext, useState } from 'react';
import Axios from 'axios';

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
  ]);

  const initializeData = async page_id => {
    const defaultData = [{
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
    }]

    await Axios({
      method: 'GET',
      params: {page_id},
      url: 'https://us-central1-rtfkt-pagebuilder.cloudfunctions.net/getRequestData',
    }).then(res => {
      setdata(res.data.data)
      return;
    }).catch(() => {
      setdata(defaultData)
      return;
    });

    return true;
  }

  const saveData = async page_id => {
    await Axios({
      method: 'POST',
      data: {
        page_id,
        data,
      },
      url: 'https://us-central1-rtfkt-pagebuilder.cloudfunctions.net/saveData',
    })
  }

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

  const deleteBlock = index => {
    let newValue = data;
    newValue.splice(index, 1);
    setdata(newValue);
  }

  const changeValue = (index, name, value) => {
    let newValue = data;
    newValue[index] = {...newValue[index], [name]: value}
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
          deleteBlock,
          changeValue,
          initializeData,
          saveData,
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;
