import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    // console.log(this.context);
    return (
      <React.Fragment>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange('english')}
          className='ui flag us'
        ></i>
        <i
          onClick={() => this.context.onLanguageChange('vietnamese')}
          className='ui flag vn'
        ></i>
      </React.Fragment>
    );
  }
}

export default LanguageSelector;
