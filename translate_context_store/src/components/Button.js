import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderButton(value) {
    return value === 'english' ? 'Submit' : 'Nhap';
  }
  render() {
    return (
      <ColorContext>
        {(color) => (
          <div className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderButton(value.language)}
            </LanguageContext.Consumer>
          </div>
        )}
      </ColorContext>
    );
  }
}

export default Button;
