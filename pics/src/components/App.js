import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }
  // Working with Promise .then
  //   onSearchSubmit(term) {
  //     // console.log(term);
  //     axios
  //       .get('https://api.unsplash.com//search/photos', {
  //         params: { query: term },
  //         headers: {
  //           Authorization:
  //             'Client-ID pTXrk2RUgCrTvkjIKRD-rQHUWKJXO9iiNlpruour7LQ',
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data.results);
  //       });
  //   }

  // Working with async await technique
  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    // console.log(response.data.results);
    // console.log(this);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          guessWhatIAm='I am a propsObject'
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
