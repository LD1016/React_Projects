import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: 'Vietnamese',
    value: 'vi',
  },
  {
    label: 'AFrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter text</label>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type='text'
          />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <h3 className='ui header'>
        Output
        <Convert text={text} language={language} />
      </h3>
    </div>
  );
};

export default Translate;
