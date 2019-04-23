import React from 'react';
import { connect } from 'react-redux';

import OptionsForm from './optionsFormDumb';
import { sortingMethod } from '../../actions/allRecordsUI';

const mapStateToProps = ({ allRecordsUI }) => {
  const { sortBy } = allRecordsUI
  return { sortBy }
}

const mapDispatchToProps = dispatch => ({
  handleSorting: e => {
    const { value } = e.target
    const action = sortingMethod(value)
    dispatch(action)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(OptionsForm)
