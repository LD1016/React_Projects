import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const language = this.context.language === 'english' ? 'Name' : 'Ten';
    return (
      <div className='ui field'>
        <label>{language}</label>
        <input />
      </div>
    );
  }
}

export default Field;
