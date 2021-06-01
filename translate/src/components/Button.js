import React from 'react';
import LanguageContect from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// class Button extends React.Component {
//   static contextType = LanguageContect;
//   render() {
//     // console.log(this.context);
//     const text = this.context === 'English' ? 'Submit' : 'Nhap';
//     return <button className='ui button primary'>{text}</button>;
//   }
// }

// export default Button;

class Button extends React.Component {
  renderButton = (value) => {
    return value === 'English' ? 'Submit' : 'Nhap';
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContect.Consumer>
              {/* {(value) => (value === 'English' ? 'Submit' : 'Nhap')} */}
              {(value) => this.renderButton(value)}
            </LanguageContect.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
