import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import { fetchStream , editStream } from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    console.log('props: ' , this.props)
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id , formValues);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    console.log(this.props);
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')} 
          onSubmit={this.onSubmit}
         />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state: ',state)
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream , editStream })(StreamEdit);
