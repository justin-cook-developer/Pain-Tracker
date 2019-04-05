import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { toggleActive } from '../../actions/header';

const HeaderSmart = props => {
  return <Header {...props} />
}

const mapStateToProps = ({ header }) => ({
  isActive: header.isActive,
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    const action = toggleActive()
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSmart)
