import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

/* actions */
import * as meta from '../actions/meta'

/* component */
import Detail from '../components/detail'

/* state to props */
const mapStateToProps = (state, ownProps) => {
  return {
    meta:state.meta,
    didMount:state.didMount
  }
}

/* dispatch proos */
const mapDispatchToProps = (dispatch) => {
  return {
    actions:{
      meta:bindActionCreators({...meta},dispatch)
    }
  }
}

/* fetchData function on access at server */
Detail.fetchData = (dispatch) => {
  return dispatch({
    type:"META-SET",
    meta:{
      title:"Detail Container fetchData",
      description:"This is write by /src/containers/detail.js fetchData",
      img:"detail_container.jpeg",
      url:"/src/containers/detail.js"
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)