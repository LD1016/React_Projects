import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  //   console.log(props);
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Song Detail:</h3>
      <p>
        {song.title}
        <br />
        {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);