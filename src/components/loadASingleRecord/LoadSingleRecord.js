import React from 'react';
import { connect } from 'react-redux';

import { getRecord } from '../../actions/records';

const HOC = Component => {
  class LoadSingleRecord extends React.Component {
    componentDidMount() {
      this.props.retrieveRecord()
    }

    render() {
      return (
        <React.Fragment>
          <Component {...this.props} />
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = ({ records }) => {
    const record = records.single
    return { record }
  }

  const mapDispatchToProps = (dispatch, { match }) => ({
    retrieveRecord: () => {
      const id = Number(match.params.id)
      const action = getRecord(id)
      dispatch(action)
    },
  })

  return connect(mapStateToProps, mapDispatchToProps)(LoadSingleRecord)
}

export default HOC
