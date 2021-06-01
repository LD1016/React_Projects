import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     // The ONLY TIME we do direct assignment to this.state
  //     this.state = { lat: null, errMessage: '' };
  //   }
  state = { lat: null, errMessage: '' };

  componentDidMount() {
    // console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  //   componentDidUpdate() {
  //     console.log('My component was just updated - it rendered!');
  //   }

  renderContent() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
