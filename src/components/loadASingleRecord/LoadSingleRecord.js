import React from 'react';
import { connect } from 'react-redux';

import { updateRecord, getRecord } from '../../actions/records';

// class LoadSingleRecord extends React.Component {
//   componentDidMount() {
//     this.props.retrieveRecord()
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.props.render(this.props)}
//       </React.Fragment>
//     )
//   }
// }

// const mapStateToProps = ({ records }) => {
//   const record = records.single
//   return { record }
// }

// const mapDispatchToProps = (dispatch, { match }) => ({
//   retrieveRecord: () => {
//     const id = Number(match.params.id)
//     const action = getRecord(id)
//     dispatch(action)
//   },
// })

// const ConnectedLoader = connect(mapStateToProps, mapDispatchToProps)(LoadSingleRecord)

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

  const ConnectedLoader = connect(mapStateToProps, mapDispatchToProps)(LoadSingleRecord)

  return ConnectedLoader
}

export default HOC
