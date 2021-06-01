import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.id = this.props.match.params.id;
    this.props.fetchStream(this.id);
  }
  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete stream title: ${this.props.stream.title}`;
  };
  renderAction = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.id)}
          className='ui button negative'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        action={this.renderAction()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
