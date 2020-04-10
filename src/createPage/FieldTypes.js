import React from 'react';

const FieldTypes = {
  string: {
    defaultValue: '',
    render: (value, setValue) => (      
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    )
  },
  boolean: {
    defaultValue: false,
    render: (value, setValue) => (      
      <input
        type="checkbox"
        onChange={e => setValue(e.target.checked)}
        checked={!!value}
      />
    )
  },
  blob: {
    defaultValue: '',
    render: (value, setValue) => (      
      <textarea
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    )
  }
};

export default FieldTypes;
